<template>
  <el-collapse class="el-collapse-demo">
    <slot></slot>
  </el-collapse>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.el-collapse-demo {
  :deep(.el-collapse-item__content) {
    padding: 0;
  }
  :deep(.el-collapse-item__header) {
    height: 36px;
    padding: 0 8px 0;
  }
}
</style>
