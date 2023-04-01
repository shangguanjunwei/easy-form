<template>
  <el-scrollbar class="el-scrollbar-demo" always>
    <div class="content">
      <el-form :model="form">
        <draggable
          class="draggle-demo"
          :list="list"
          :group="{ name: 'form' }"
          v-bind="draggable_ptions"
        >
          <template #item="{ element }">
            <el-form-item v-if="element.is_form_item" :label="element.name">
              <!-- 如果是输入型组件 -->
              <component :is="element.comp_name"></component>
            </el-form-item>
            <!-- 如果不是输入型组件（用于结构处理的组件，比如el-row） -->
            <component v-else :is="element.comp_name"></component>
          </template>
        </draggable>
      </el-form>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";

const list = ref([]);

const form = ref({});

console.log(JSON.stringify(list.value));

const draggable_ptions = ref({
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
  itemKey: "id",
});
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
