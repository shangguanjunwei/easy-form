<template>
  <el-input v-bind="options" :model-value="value" @input="onInput" />
</template>

<script setup lang="ts">
import emitter from "@/mitt/index";
import { cloneDeep } from "lodash";
import { ref } from "vue";

const props = defineProps(["options"]);
const value = ref("");

emitter.on("form_data", (data: any) => {
  value.value = data.value[props.options.name];
});

const onInput = (e: any) => {
  emitter.emit("form_data_change", { [props.options.name]: e });
};
</script>

<style scoped></style>
