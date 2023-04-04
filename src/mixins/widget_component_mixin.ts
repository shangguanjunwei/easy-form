import { cloneDeep } from "lodash";
import { ref } from "vue";

const formData = ref({});

export const useWidgetComponentMixin = () => {
  // 更新表单数据
  const updataFormData = (data: { [key: string]: any }) => {
    formData.value = Object.assign({}, formData.value, data);
  };

  // 获取表单数据
  const getFormData = () => {
    return cloneDeep(formData.value);
  };

  return {
    updataFormData,
    getFormData,
  };
};
