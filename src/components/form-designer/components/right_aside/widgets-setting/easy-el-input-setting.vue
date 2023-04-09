<template>
  <my-right-el-collapse :model-value="[1, 2, 3]" class="el-collapse-demo">
    <!-- formItem 配置项 -->
    <template #formItem>
      <el-form
        :model-value="form_item_options_form"
        label-width="120"
        size="small"
        label-position="right"
      >
        <el-form-item :label="dict.label" prop="label">
          <el-input v-model="form_item_options_form.label" />
        </el-form-item>
        <el-form-item :label="dict['inline-message']" :prop="'inline-message'">
          <el-switch v-model="form_item_options_form['inline-message']" />
        </el-form-item>
        <el-form-item :label="dict['label-width']" :prop="'label-width'">
          <el-input-number
            v-model="form_item_options_form['label-width']"
            controls-position="right"
            step-strictly
            :min="0"
          />
        </el-form-item>
        <el-form-item :label="dict.required" prop="required">
          <el-switch v-model="form_item_options_form.required" />
        </el-form-item>
        <el-form-item :label="dict.rules" prop="rules">
          <el-input v-model="form_item_options_form.rules" />
        </el-form-item>
        <el-form-item :label="dict['show-message']" :prop="'show-message'">
          <el-switch v-model="form_item_options_form['show-message']" />
        </el-form-item>
        <el-form-item :label="dict.size" prop="size">
          <el-select v-model="form_item_options_form.size">
            <el-option label="small" value="small" />
            <el-option label="default" value="default" />
            <el-option label="large" value="large" />
          </el-select>
        </el-form-item>
      </el-form>
    </template>

    <!-- item 配置项 -->
    <template #item>
      <el-form
        :model-value="item_options_form"
        label-width="120"
        size="small"
        label-position="right"
      >
        {{ item_options_form.name }}
        <el-form-item :label="dict.prop" prop="name">
          <el-input v-model="item_options_form.name" />
        </el-form-item>
        <el-form-item :label="dict.clearable" prop="clearable">
          <el-switch v-model="item_options_form.clearable" />
        </el-form-item>
        <el-form-item :label="dict.maxlength" prop="maxlength">
          <el-input-number
            v-model="item_options_form.maxlength"
            controls-position="right"
            step-strictly
            :min="0"
          />
        </el-form-item>
        <el-form-item :label="dict.minlength" prop="minlength">
          <el-input-number
            v-model="item_options_form.minlength"
            controls-position="right"
            step-strictly
            :min="0"
          />
        </el-form-item>
        <el-form-item
          :label="dict['show-word-limit']"
          :prop="'show-word-limit'"
        >
          <el-switch v-model="item_options_form['show-word-limit']" />
        </el-form-item>
        <el-form-item :label="dict.placeholder" prop="placeholder">
          <el-input v-model="item_options_form.placeholder" />
        </el-form-item>
        <el-form-item :label="dict.disabled" prop="disabled">
          <el-switch v-model="item_options_form.disabled" />
        </el-form-item>
        <el-form-item :label="dict['prefix-icon']" :prop="'prefix-icon'">
          <el-input v-model="item_options_form['prefix-icon']" />
        </el-form-item>
        <el-form-item :label="dict['suffix-icon']" :prop="'suffix-icon'">
          <el-input v-model="item_options_form['suffix-icon']" />
        </el-form-item>
        <el-form-item :label="dict.readonly" prop="readonly">
          <el-switch v-model="item_options_form.readonly" />
        </el-form-item>
        <el-form-item :label="dict.default_value" prop="default_value">
          <el-input v-model="item_options_form.default_value" />
        </el-form-item>
      </el-form>
    </template>
  </my-right-el-collapse>
</template>

<script setup lang="ts">
import myRightElCollapse from "../components/my-right-el-collapse.vue";
import { useListMixin } from "@/mixins/list_mixin";
import { useWidgetComponentMixin } from "@/mixins/widget_component_mixin";
import {
  ref,
  watchPostEffect,
  onMounted,
  onUnmounted,
  watch,
  onBeforeUnmount,
} from "vue";
import dict from "@/config/common_config";
import { cloneDeep, isEmpty } from "lodash";
const { updata_form_item_options, updata_options, active_element } =
  useListMixin();
const { formData, updataFormData, deleteFormData } = useWidgetComponentMixin();

// formItem 配置项
const form_item_options_form = ref<any>({});
// item 配置项
const item_options_form = ref<any>({});
const fistEnter = ref<boolean>(true);

// onMounted(() => {
//   const { form_item_options, options } = active_element.value;
//   form_item_options_form.value = cloneDeep(form_item_options);
//   item_options_form.value = cloneDeep(options);
// });

// // 内容区域修改的时候，更新当前的配置
// watchPostEffect(() => {
//   // 如果当前选中的元素的 name 等于当前组件的 name
//   if (active_element.value.options.name === item_options_form.value.name) {
//     item_options_form.value.default_value = cloneDeep(
//       formData.value[item_options_form.value.name]
//     );
//   }
// });

// // 当前的配置发生改变的时候，更新到内容区域
// watchPostEffect(() => {
//   if (active_element.value.options.name === item_options_form.value.name) {
//     updataFormData({
//       [item_options_form.value.name]: cloneDeep(
//         item_options_form.value.default_value
//       ),
//     });
//   }
// });

// watchPostEffect(() => {
//   updata_form_item_options(form_item_options_form.value);
//   updata_options(item_options_form.value);
// });
</script>

<style scoped lang="scss"></style>
