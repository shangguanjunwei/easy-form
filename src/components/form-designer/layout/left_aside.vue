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
            <el-button class="el-button-demo" text bg>
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
import { ref } from "vue";

const draggable_ptions = ref({
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
  sort: false,
  itemKey: "id",
});

const onClone = (original: any) => {
  // console.log("11111", original);
  return { ...original };
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
