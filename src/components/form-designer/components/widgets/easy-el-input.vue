<template>
  <el-input v-bind="props.options" :model-value="value" @input="onInput" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWidgetComponentMixin } from "@/mixins/widget_component_mixin";
const { updataFormData, formData } = useWidgetComponentMixin();
// 传入的 配置项
const props = defineProps(["options"]);
// 获取表单数据
const value = computed(() => formData.value[props.options.name]);
// 更新表单数据
const onInput = (e: any) => updataFormData({ [props.options.name]: e });
</script>

<style scoped lang="scss"></style>
