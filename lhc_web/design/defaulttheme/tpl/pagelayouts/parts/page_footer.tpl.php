<?php if (!isset($Result['body_class'])) : ?>
<div class="p-1 border-top" translate="no">
    <p class="float-right small"><a target="_blank" rel="noreferrer" href="http://livehelperchat.com">Live Helper Chat &copy; <?php echo date('Y')?></a></p>
    <p class="small" ng-non-bindable><a rel="noreferrer" href="<?php echo erLhcoreClassModelChatConfig::fetch('customer_site_url')->current_value?>"><?php echo htmlspecialchars(erLhcoreClassModelChatConfig::fetch('customer_company_name')->current_value)?></a></p>
</div>
<?php endif; ?>

<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_footer_js.tpl.php'));?>
<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_footer_js_extension_multiinclude.tpl.php'));?>