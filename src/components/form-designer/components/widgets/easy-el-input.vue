<template>
  <el-input v-bind="options" v-model="value" @input="onInput" />
</template>

<script setup lang="ts">
import emitter from "@/mitt/index";
import { cloneDeep } from "lodash";
import { ref } from "vue";

const props = defineProps(["options"]);
const options = ref(cloneDeep(props.options));
const default_value = options.value.default_value;
const value = ref(default_value);
delete options.value.default_value;
const onInput = (e: any) => {
  emitter.emit("form_data_change", { [props.options.name]: e });
};
</script>

<style scoped></style>
