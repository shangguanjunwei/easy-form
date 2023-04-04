<template>
  <div style="margin-bottom: 10px; padding: 0 10px">
    <h1>{{ props.options.name }}</h1>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
</script>

<style scoped></style>
