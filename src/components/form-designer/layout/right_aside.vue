<template>
  <el-scrollbar height="100%">
    <div v-if="active_comp"><component :is="active_comp"></component></div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { useListMixin } from "@/mixins/list_mixin";
import { isEmpty } from "lodash";
const { active_element } = useListMixin();
// 当前激活的组件
const active_comp = ref<string>("");
watchEffect(() => {
  active_comp.value = isEmpty(active_element?.value)
    ? ""
    : `easy-${active_element.value?.type}-setting`;
});
</script>

<style scoped></style>
