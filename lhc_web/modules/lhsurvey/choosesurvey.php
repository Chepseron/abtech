<?php

$chat = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelChat', $Params['user_parameters']['chat_id']);

if (is_numeric($Params['user_parameters']['survey_id'])) {
    
    if ($chat->status_sub != erLhcoreClassModelChat::STATUS_SUB_ON_HOLD) {
        erLhcoreClassChatHelper::redirectToSurvey(array('survey_id' => $Params['user_parameters']['survey_id'], 'chat' => $chat, 'user' => $currentUser->getUserData()));

        $tpl = erLhcoreClassTemplate::getInstance('lhkernel/alert_success.tpl.php');
        $tpl->set('msg',erTranslationClassLhTranslation::getInstance()->getTranslation('survey/choosesurvey','Visitor was redirected to survey, you can now close this window.'));

        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.set_sub_status',array('chat' => & $chat));
    } else {
        $tpl = erLhcoreClassTemplate::getInstance('lhkernel/validation_error.tpl.php');
        $tpl->set('errors',[erTranslationClassLhTranslation::getInstance()->getTranslation('survey/choosesurvey', 'Chat is on hold and can not be forwarded to survey')]);
    }

    echo json_encode(array('error' => 'false', 'chat_id' => $chat->id, 'result' => $tpl->fetch()));
    exit;
}

$tpl = erLhcoreClassTemplate::getInstance('lhsurvey/choosesurvey.tpl.php');
$tpl->set('chat', $chat);

print $tpl->fetch();
exit;

?>