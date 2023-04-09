<template>
  <draggable
    class="draggle-demo"
    :list="props.tasks"
    :group="{ name: 'form', put: !props.isFirst }"
    v-bind="draggable_ptions"
    @change="draggableChange"
    handle=".move-btn"
  >
    <template #item="{ element }">
      <div
        class="draggle-div"
        :class="{
          is_active: active_element?.id === element.id && !props.isFirst,
        }"
        @click.stop.prevent="onChooseElement(element)"
      >
        <!-- 拖动按钮 -->
        <div v-if="!props.isFirst" class="handle-div left-top-div move-btn">
          <el-icon><Rank /></el-icon>
        </div>

        <!-- 表单元素 -->
        {{ element.options?.name }}
        <el-form-item
          v-if="element.is_form_item"
          v-bind="element.form_item_options"
        >
          <component
            :is="element.comp_name"
            :options="element.options"
            :key="element.id"
          />
        </el-form-item>

        <!-- 非表单元素 -->
        <component
          v-else
          :is="element.comp_name"
          :options="element.options"
          :key="element.id"
        >
          <nested class="draggle-demo-min-div" :tasks="element.children" />
        </component>

        <!-- 嵌套元素 -->
        <nested
          v-if="props.isFirst"
          :class="{ 'draggle-demo-outside-div': props.isFirst }"
          :tasks="element.children"
        />

        <!-- 删除按钮 -->
        <div
          v-if="!props.isFirst"
          class="handle-div right-bottom-div"
          @click.stop="deleteEvement(element)"
        >
          <el-icon><Delete /></el-icon>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";
import { useWidgetComponentMixin } from "@/mixins/widget_component_mixin";
import { useListMixin } from "@/mixins/list_mixin";
import { cloneDeep } from "lodash";
const { updataFormData, deleteFormData } = useWidgetComponentMixin();
const { updata_active_element, delete_active_element, active_element } =
  useListMixin();
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
  // 如果是新增的元素
  if (e.hasOwnProperty("added")) {
    // 更新选中的元素
    updata_active_element(e.added.element);
    if (e.added.element.is_form_item) {
      // 如果是表单元素，才给 formData 增加元素
      updataFormData({
        [e.added.element.options.name]: cloneDeep(
          e.added.element.options.default_value
        ),
      });
    }
  }
};
// 选中元素
const onChooseElement = (element: any) => {
  // 如果是第一层或者是当前选中的元素，不做任何操作
  if (props.isFirst || element.id === active_element.value.id) return;
  updata_active_element(element);
};

// 删除元素
const deleteEvement = (element: any) => {
  // 删除选中元素
  delete_active_element();
  // 删除结构
  props.tasks.splice(
    props.tasks.findIndex((item: any) => item.id === element.id),
    1
  );
  // 删除表单数据
  deleteFormData(element.options.name);
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
    &.is_active {
      outline: 1px solid lightblue;
      > .handle-div {
        display: flex;
      }
    }

    .handle-div {
      display: none;
      position: absolute;
      background-color: rgba($color: lightblue, $alpha: 0.4);
      align-items: center;
      justify-content: center;
      font-size: 14px;
      padding: 2px 6px;
      cursor: pointer;
      color: blue;
      transition: all 0.3s;
      &:hover {
        background-color: rgba($color: lightblue, $alpha: 1);
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
</style>
