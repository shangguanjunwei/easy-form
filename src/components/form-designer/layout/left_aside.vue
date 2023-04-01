<template>
  <draggable
    :list="list"
    item-key="id"
    class="drag-list"
    tag="div"
    :group="{ name: 'form', pull: 'clone', put: false }"
    v-bind="draggable_ptions"
  >
    <template #item="{ element }">
      <p>{{ element.name }}</p>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";

const list = ref([
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
]);

const draggable_ptions = {
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
};
</script>

<style scoped lang="scss"></style>
