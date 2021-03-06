<?php

header('Cache-Control: nocache, no-store, max-age=0, must-revalidate');
header('Pragma: no-cache');
header('Expires: Sun, 02 Jan 1990 00:00:00 GMT');

$tpl = erLhcoreClassTemplate::getInstance( 'lhchat/chat.tpl.php');

if (isset($Params['user_parameters_unordered']['theme']) && ($themeId = erLhcoreClassChat::extractTheme($Params['user_parameters_unordered']['theme'])) !== false) {
	try {
		$theme = erLhAbstractModelWidgetTheme::fetch($themeId);
        $theme->translate();
		$Result['theme'] = $theme;
		$tpl->set('theme',$theme);
	} catch (Exception $e) {

	}
} else {
	$defaultTheme = erLhcoreClassModelChatConfig::fetch('default_theme_id')->current_value;
	if ($defaultTheme > 0) {
		try {
			$theme = erLhAbstractModelWidgetTheme::fetch($defaultTheme);
            $theme->translate();
			$Result['theme'] = $theme;		
			$tpl->set('theme',$theme);
		} catch (Exception $e) {
				
		}
	}
}

if (isset($Params['user_parameters_unordered']['er']) && (int)$Params['user_parameters_unordered']['er'] == 1){
    $Result['er'] = true;  
}

try {

    $chat = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelChat', $Params['user_parameters']['chat_id']);

    if ($chat->hash == $Params['user_parameters']['hash'])
    {
        $tpl->set('chat_id',$Params['user_parameters']['chat_id']);
        $tpl->set('hash',$Params['user_parameters']['hash']);
        $tpl->set('chat',$chat);

        erLhcoreClassChat::setTimeZoneByChat($chat);
        
        $tpl->set('survey',is_numeric($Params['user_parameters_unordered']['survey']) ? (int)$Params['user_parameters_unordered']['survey'] : false);
        
        $Result['chat'] = $chat;

        // User online
        if ($chat->user_status != 0) {

        	$db = ezcDbInstance::get();
        	$db->beginTransaction();

	        	$chat->support_informed = 1;
	        	$chat->user_typing = time()-5;// Show for shorter period these status messages
	        	$chat->is_user_typing = 1;
	        	$chat->user_typing_txt = htmlspecialchars_decode(erTranslationClassLhTranslation::getInstance()->getTranslation('chat/userjoined','Visitor has joined the chat from popup chat window!'),ENT_QUOTES);

	        	if ($chat->user_status == erLhcoreClassModelChat::USER_STATUS_PENDING_REOPEN && ($onlineuser = $chat->online_user) !== false) {
	        		$onlineuser->reopen_chat = 0;
	        		$onlineuser->saveThis();
	        	}

	        	$chat->user_status = erLhcoreClassModelChat::USER_STATUS_JOINED_CHAT;

                if ($chat->unanswered_chat == 1 && $chat->status == erLhcoreClassModelChat::STATUS_ACTIVE_CHAT)
                {
                    $chat->unanswered_chat = 0;
                }

                $chat->updateThis(array('update' => array(
                    'unanswered_chat',
                    'user_typing_txt',
                    'is_user_typing',
                    'user_typing',
                    'support_informed',
                )));


        	$db->commit();
        }

        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat',array('result' => & $Result, 'tpl' => & $tpl, 'params' => & $Params, 'chat' => & $chat));
    } else {
        $tpl->setFile( 'lhchat/errors/chatnotexists.tpl.php');
    }

} catch(Exception $e) {
   $tpl->setFile('lhchat/errors/chatnotexists.tpl.php');
}

if ($Params['user_parameters_unordered']['cstarted'] !== null && $Params['user_parameters_unordered']['cstarted'] != '') {
    $Result['parent_messages'][] = 'lh_callback:' . (string)strip_tags($Params['user_parameters_unordered']['cstarted']);
    $tpl->set('chat_started_now',true);
}

$Result['content'] = $tpl->fetch();
$Result['pagelayout'] = 'userchat';
$Result['is_sync_required'] = true;
$Result['dynamic_height'] = true;

$Result['path'] = array(array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Chat started')))


?>