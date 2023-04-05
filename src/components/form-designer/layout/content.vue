<template>
  <!-- <button @click="onClick">获取数据</button> -->
  <el-scrollbar class="el-scrollbar-demo" always>
    <div class="content">
      <el-form :model="formData" ref="esay_form">
        <nested :tasks="list" :isFirst="true" />
      </el-form>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useWidgetComponentMixin } from "@/mixins/widget_component_mixin";
import { useListMixin } from "@/mixins/list_mixin";
import nested from "@/components/common/nested.vue";
const { formData } = useWidgetComponentMixin();
const { list } = useListMixin();
// 表单 ref
const esay_form = ref<any>(null);
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
  }
}
</style>
