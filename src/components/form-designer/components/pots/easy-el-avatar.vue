<template>
  <div>
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
