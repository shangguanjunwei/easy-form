<template>
  <el-scrollbar height="100%">
    <el-collapse
      class="el-collapse-demo"
      :model-value="config.map((item) => item.id)"
    >
      <el-collapse-item
        v-for="(item, index) in config"
        :key="index"
        :name="item.id"
        :title="item.title"
      >
        <draggable
          class="draggable-list"
          :list="item.config_list"
          :group="{ name: 'form', pull: 'clone', put: false }"
          v-bind="draggable_ptions"
          :clone="onClone"
        >
          <template #item="{ element }">
            <el-button class="el-button-demo" text bg :icon="element.icon_name">
              {{ element.name }}
            </el-button>
          </template>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </el-scrollbar>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import config from "@/config/index";
import { getRandomIntFn } from "@/utils/random";
import { ref } from "vue";
import { cloneDeep } from "lodash";
// 输入型字段组件基本options配置
import entry_options from "@/config/entry_widgets_config/options_config";
// 输入型字段组件form-item配置
import entry_form_item_options from "@/config/entry_widgets_config/form_item_config";
// 非输入型字段组件基本options配置
import pot_options from "@/config/pot_widgets_config/options_config";
import { v4 as uuidv4 } from "uuid";

// 动画效果
const draggable_ptions = ref({
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
  sort: false,
  itemKey: "id",
});

// 克隆的时候
const onClone = (original: any) => {
  const name = original.type + getRandomIntFn();
  let res: any = Object.assign({}, cloneDeep(original), {
    options: { ...pot_options[original.type], name },
    id: uuidv4(),
  });
  // 如果是表单元素，就给form表单增加元素
  if (original.is_form_item) {
    Object.assign(res, {
      form_item_options: {
        ...entry_form_item_options,
        prop: name,
        label: original.name,
      },
    });
  }
  return res;
};
</script>

<style scoped lang="scss">
.el-collapse-demo {
  :deep(.el-collapse-item__content) {
    padding: 0;
  }
  :deep(.el-collapse-item__header) {
    height: 36px;
    padding: 0 8px 0;
  }
  .draggable-list {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 4px));
    grid-gap: 8px;
    padding: 8px;
    box-sizing: border-box;
    .el-button-demo {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
