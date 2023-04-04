<template>
  <button @click="onClick">获取数据</button>
  <el-scrollbar class="el-scrollbar-demo" always>
    <div class="content" ref="esay_form">
      <el-form :model="formData">
        <draggable
          class="draggle-demo"
          :list="list"
          :group="{ name: 'form' }"
          v-bind="draggable_ptions"
          @change="draggableChange"
        >
          <template #item="{ element }">
            <el-form-item
              v-if="element.is_form_item"
              v-bind="element.form_item_options"
            >
              <component :is="element.comp_name" :options="element.options" />
            </el-form-item>
            <component v-else :is="element.comp_name"></component>
          </template>
        </draggable>
      </el-form>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";
import emitter from "@/mitt/index";

// 表单 ref
const esay_form = ref<any>(null);
// draggable 数据结构
const list = ref<any>([]);
// form表单数据
const formData = ref<any>({});

// draggable 属性配置
const draggable_ptions = ref({
  animation: 350,
  disabled: false,
  ghostClass: "ghost",
  itemKey: "id",
});

const onClick = () => {
  console.log(formData.value);
};

// 拖动元素发生改变的时候
const draggableChange = (e: any) => {
  // 如果是新增的元素，就给form表单增加元素
  if (e.hasOwnProperty("added")) {
    if (e.added.element.is_form_item) {
      // 如果是表单元素，才给form表单增加元素
      emitter.emit("form_data_change", {
        [e.added.element.options.name]: e.added.element.options.default_value,
      });
      delete e.added.element.options.default_value;
    }
  }
};

// 监听事件
emitter.on("form_data_change", (data: any) => {
  formData.value = Object.assign({}, formData.value, data);
  emitter.emit("form_data", formData);
});
</script>

<style scoped lang="scss">
.el-scrollbar-demo {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  // 重写滚动条样式
  :deep(.el-scrollbar__bar) {
    padding: 12px 0;
  }
  .content {
    background-color: #fff;
    min-height: calc(#{$main-height} - 20px);
    border: 1px solid transparent;
    box-sizing: border-box;
    position: relative;
    .draggle-demo {
      min-height: calc(#{$main-height} - 22px);
      border: 1px solid transparent;
      box-sizing: border-box;
    }
  }
}
</style>
