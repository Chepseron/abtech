<form action="" method="post" autocomplete="off" enctype="multipart/form-data" ng-non-bindable>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>
    <?php include(erLhcoreClassDesign::designtpl('lhspeech/speech_form_fields.tpl.php'));?>
         
    <input type="submit" class="btn btn-secondary" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Save')?>" />
</form>