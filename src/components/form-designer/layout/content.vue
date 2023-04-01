<template>
  <el-scrollbar class="el-scrollbar-demo" always>
    <div class="content">
      <el-form :model="formData">
        <draggable
          class="draggle-demo"
          :list="list"
          :group="{ name: 'form' }"
          v-bind="draggable_ptions"
          @change="log"
        >
          <template #item="{ element }">
            <div>
              {{ element.comp_name }}
            </div>
          </template>
          <!-- <template #item="{ element }">
            <el-form-item v-if="element.is_form_item" :label="element.name">
              <component :is="element.comp_name"></component>
            </el-form-item>
            <component v-else :is="element.comp_name"></component>
          </template> -->
        </draggable>
      </el-form>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";

// draggable 数据结构
const list = ref([]);

// form表单数据
const formData = ref({});

// draggable 属性配置
const draggable_ptions = ref({
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
  itemKey: "id",
});

const log = (e: any) => {
  console.log("change", e);
};
</script>

<style scoped lang="scss">
.el-scrollbar-demo {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  // 重写滚动条样式
  :deep(.el-scrollbar__bar) {
    padding: 12px 0;
  }
  .content {
    background-color: #fff;
    min-height: calc(#{$main-height} - 20px);
    border: 1px solid transparent;
    box-sizing: border-box;
    position: relative;
    .draggle-demo {
      min-height: calc(#{$main-height} - 22px);
      border: 1px solid transparent;
      box-sizing: border-box;
    }
  }
}
</style>
