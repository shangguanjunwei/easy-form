<template>
  <el-input v-bind="props.options" v-model="value" @input="onInput" />
</template>

<script setup lang="ts">
import emitter from "@/mitt/index";
import { ref } from "vue";

const props = defineProps(["options"]);

const value = ref(props.options.defaultValue);
const onInput = (e: any) => {
  console.log(e);
  emitter.emit("form_data_change", { [props.options.name]: e });
};
</script>

<style scoped></style>
