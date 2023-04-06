<template>
  <my-el-collapse :model-value="[1, 2]" class="el-collapse-demo">
    <el-collapse-item title="属性" :name="1">111 </el-collapse-item>
    <el-collapse-item title="钩子" :name="2">222 </el-collapse-item>
  </my-el-collapse>
</template>

<script setup lang="ts">
import myElCollapse from "@/components/common/my-el-collapse.vue";
import { useListMixin } from "@/mixins/list_mixin";
import { watchEffect } from "vue";
const { updata_form_item_options, updata_options, active_element } =
  useListMixin();
</script>

<style scoped lang="scss"></style>
