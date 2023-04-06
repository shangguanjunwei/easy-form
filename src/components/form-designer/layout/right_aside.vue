<template>
  <el-scrollbar height="100%">
    <component :is="active_comp"></component>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { useListMixin } from "@/mixins/list_mixin";
const { updata_form_item_options, updata_options, active_element } =
  useListMixin();
// 当前激活的组件
const active_comp = ref<string>("");
watchEffect(() => {
  active_comp.value = `easy-${active_element.value?.type}-setting`;
  console.log(active_comp.value);
});
</script>

<style scoped></style>
