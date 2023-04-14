<template>
  <el-scrollbar height="100%">
    <component v-if="comp_name" :is="comp_name" :key="comp_id"></component>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useListMixin } from "@/mixins/list_mixin";
const { active_element } = useListMixin();
// 当前激活的组件名称
const comp_name = ref<string>("");
// 当前激活的组件id
const comp_id = ref<string>("");

watch(
  [() => active_element.value.id, () => active_element.value.comp_name],
  (newVal) => {
    comp_id.value = newVal[0] || "";
    comp_name.value = newVal[1] ? newVal[1] + "-setting" : "";
  }
);
</script>

<style scoped></style>
