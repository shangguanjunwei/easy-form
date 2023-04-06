import { cloneDeep } from "lodash";
import { ref, computed } from "vue";

const _formData = ref<{ [key: string]: any }>({});

export const useWidgetComponentMixin = () => {
  // 更新表单数据
  const updataFormData = (data: { [key: string]: any }) => {
    console.log("执行", data);
    let keys = Object.keys(data);
    keys.forEach((key) => {
      _formData.value[key] = cloneDeep(data[key]);
    });
  };

  // 删除表单字段
  const deleteFormData = (key: string) => {
    console.log("删除：", key);
    const obj = cloneDeep(_formData.value);
    delete obj[key];
    _formData.value = obj;
    console.log(JSON.stringify(_formData.value));
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
