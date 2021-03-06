<div class="form-group" ng-non-bindable>
    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('department/edit','Name');?></label>
    <input type="text" class="form-control form-control-sm" name="Name"  value="<?php echo htmlspecialchars($departament_group->name);?>" />
</div>

<h4><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('department/edit','Departments');?></h4>

<div ng-non-bindable class="row" style="max-height:500px;overflow-y:auto;">
        <?php $depIds = $departament_group->departments_ids; foreach (erLhcoreClassModelDepartament::getList(['limit' => false, 'sort' => '`name` ASC']) as $department) : ?>
        <div class="col-6">
            <div class="form-group mb-0">
                <label><input type="checkbox" name="departaments[]" value="<?php echo $department->id?>" <?php if (in_array($department->id, $depIds)) : ?>checked="checked"<?php endif;?>> <?php echo htmlspecialchars($department->name)?> </label>
            </div>
        </div>
        <?php endforeach;?>
</div>

