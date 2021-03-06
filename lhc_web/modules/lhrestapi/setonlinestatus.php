<?php

try {
    erLhcoreClassRestAPIHandler::validateRequest();

    $user = erLhcoreClassModelUser::fetch((int) $Params['user_parameters']['user_id']);

    if (!erLhcoreClassRestAPIHandler::hasAccessTo('lhuser', 'changeonlinestatus') && $user->id == erLhcoreClassRestAPIHandler::getUserId()) {
        throw new Exception('You do not have permission. `lhuser`, `changeonlinestatus` is required.');
    } elseif (!erLhcoreClassRestAPIHandler::hasAccessTo('lhuser', 'edituser') || !erLhcoreClassGroupRole::canEditUserGroups(erLhcoreClassRestAPIHandler::getUser(), $user)) {
        throw new Exception('You do not have permission. `lhuser`, `edituser` is required and to belong to all other user groups.');
    }

    if ($user instanceof erLhcoreClassModelUser) {

        $db = ezcDbInstance::get();

        $db->beginTransaction();

        if ($Params['user_parameters']['online'] == 1) {
            $user->hide_online = 0;
        } else {
            $user->hide_online = 1;
        }

        erLhcoreClassUser::getSession()->update($user);

        erLhcoreClassUserDep::setHideOnlineStatus($user);

        erLhcoreClassChat::updateActiveChats($user->id);

        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.operator_status_changed',array('user' => & $user, 'reason' => 'restapi_action'));

        echo json_encode(array('error' => false, 'result' => array('msg' => 'Status changed', 'online' => $user->hide_online == 0)));

        $db->commit();

    } else {
        throw new Exception('User could not be found!');
    }

} catch (Exception $e) {
    echo erLhcoreClassRestAPIHandler::outputResponse(array(
        'error' => true,
        'result' => $e->getMessage()
    ));
}

exit();