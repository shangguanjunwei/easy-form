<template>
  <draggable
    class="draggle-demo"
    :list="props.tasks"
    :group="{ name: 'form' }"
    v-bind="draggable_ptions"
    @change="draggableChange"
  >
    <template #item="{ element }">
      <div>
        <el-form-item
          v-if="element.is_form_item"
          v-bind="element.form_item_options"
        >
          <component :is="element.comp_name" :options="element.options" />
        </el-form-item>
        <component v-else :is="element.comp_name"></component>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";
import { useWidgetComponentMixin } from "@/mixins/widget_component_mixin";
const { updataFormData } = useWidgetComponentMixin();
const props = defineProps({
  tasks: {
    type: Array,
    default: () => [],
    required: true,
  },
});

// 拖动配置
const draggable_ptions = ref({
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
  itemKey: "id",
});

// 拖动元素发生改变的时候
const draggableChange = (e: any) => {
  // 如果是新增的元素
  if (e.hasOwnProperty("added")) {
    if (e.added.element.is_form_item) {
      // 如果是表单元素，才给 formData 增加元素
      updataFormData({
        [e.added.element.options.name]: e.added.element.options.default_value,
      });
      delete e.added.element.options.default_value;
    }
  }
};
</script>

<style scoped lang="scss">
.draggle-demo {
  min-height: calc(#{$main-height} - 22px);
  border: 1px solid transparent;
  box-sizing: border-box;
}
</style>
