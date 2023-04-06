<template>
  <my-el-collapse class="el-collapse-demo" :model-value="[1, 2, 3]">
    <el-collapse-item title="formItem属性" :name="1">
      <div class="el-collapse-item-demo">
        <slot name="formItem"></slot>
      </div>
    </el-collapse-item>
    <el-collapse-item title="item属性" :name="2">
      <div class="el-collapse-item-demo">
        <slot name="item"></slot>
      </div>
    </el-collapse-item>
    <el-collapse-item title="钩子" :name="3">
      <div class="el-collapse-item-demo">
        <slot name="hook"></slot>
      </div>
    </el-collapse-item>
  </my-el-collapse>
</template>

<script setup lang="ts">
import myElCollapse from "@/components/common/my-el-collapse.vue";
</script>

<style scoped lang="scss">
.el-collapse-item-demo {
  padding: 8px;
  box-sizing: border-box;
}
</style>
