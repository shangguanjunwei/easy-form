import { cloneDeep } from "lodash";
import { ref, computed } from "vue";

const _formData = ref<{ [key: string]: any }>({});

export const useWidgetComponentMixin = () => {
  // 更新表单数据
  const updataFormData = (data: { [key: string]: any }) => {
    console.log("更新表单数据")
    let keys = Object.keys(data);
    keys.forEach((key) => {
      _formData.value[key] = cloneDeep(data[key]);
    });
  };

  // 删除表单字段
  const deleteFormData = (key: string) => {
    console.log("删除表单字段")
    const obj = cloneDeep(_formData.value);
    delete obj[key];
    _formData.value = obj;
  };

  // 获取表单数据
  const formData: { [key: string]: any } = computed(() =>
    cloneDeep(_formData.value)
  );

  return {
    updataFormData,
    formData,
    deleteFormData,
  };
};
