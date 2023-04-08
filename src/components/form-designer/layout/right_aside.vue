<template>
  <el-scrollbar height="100%">
    <component v-if="comp_name" :is="comp_name" :key="comp_id"></component>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { watchPostEffect, ref } from "vue";
import { useListMixin } from "@/mixins/list_mixin";
import { isEmpty } from "lodash";
const { active_element } = useListMixin();
// 当前激活的组件名称
const comp_name = ref<string>("");
// 当前激活的组件id
const comp_id = ref<string>("");
watchPostEffect(() => {
  if (!isEmpty(active_element.value)) {
    comp_name.value = `easy-${active_element.value?.type}-setting`;
    comp_id.value = active_element.value?.id;
  } else {
    comp_name.value = "";
    comp_id.value = "";
  }
});
</script>

<style scoped></style>
