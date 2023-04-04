<template>
  <draggable
    class="draggle-demo"
    :list="props.tasks"
    :group="{ name: 'form', put: !props.isFirst }"
    v-bind="draggable_ptions"
    @change="draggableChange"
  >
    <template #item="{ element }">
      <div class="draggle-div">
        <el-form-item
          v-if="element.is_form_item"
          v-bind="element.form_item_options"
        >
          <component :is="element.comp_name" :options="element.options" />
        </el-form-item>
        <component v-else :is="element.comp_name" :options="element.options">
          <nested class="draggle-demo-min-div" :tasks="element.children" />
        </component>
        <nested
          v-if="props.isFirst"
          :class="{ 'draggle-demo-outside-div': props.isFirst }"
          :tasks="element.children"
        />
        <div v-if="!props.isFirst" class="move-div">
          <div class="handle-div left-top-div">
            <el-icon><Rank /></el-icon>
          </div>
          <div class="handle-div right-bottom-div">
            <el-icon><Delete /></el-icon>
          </div>
        </div>
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
  isFirst: {
    type: Boolean,
    default: false,
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
  console.log("888888", e);
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
  box-sizing: border-box;
  border: 1px solid transparent;
  position: relative;
  &.draggle-demo-outside-div {
    min-height: calc(#{$main-height} - 24px);
    border: 1px solid transparent;
    box-sizing: border-box;
  }
  .draggle-demo-min-div {
    min-height: 32px;
    border: 1px dashed #ccc;
  }
  .draggle-div {
    position: relative;
    .move-div {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: -1px;
      border: 1px solid lightblue;
      .handle-div {
        position: absolute;
        background-color: rgba($color: lightblue, $alpha: 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 2px 6px;
        cursor: pointer;
        color: blue;
        transition: all 0.3s;
        &:hover {
          background-color: rgba($color: lightblue, $alpha: 0.8);
        }
        &.left-top-div {
          top: 0;
          left: 0;
        }
        &.right-bottom-div {
          right: 0;
          bottom: 0;
          color: red;
        }
      }
    }
  }
}
</style>
