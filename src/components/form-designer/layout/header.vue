<template>
  <div>
    <el-button type="primary" @click="getList">获取结构</el-button>
    <el-button type="primary" @click="getFormData">获取数据</el-button>
  </div>
</template>

<script setup lang="ts">
import { useWidgetComponentMixin } from "@/mixins/widget_component_mixin";
import { useListMixin } from "@/mixins/list_mixin";
const { formData } = useWidgetComponentMixin();
const { list } = useListMixin();

const getList = () => {
  console.log("getList", list.value[0].children);
};
const getFormData = () => {
  console.log("getFormData", formData.value);
};
</script>

<style scoped></style>
