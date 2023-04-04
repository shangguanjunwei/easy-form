import { cloneDeep } from "lodash";
import { ref, computed } from "vue";

const _formData = ref<Object>({});

export const useWidgetComponentMixin = () => {
  // 更新表单数据
  const updataFormData = (data: { [key: string]: any }) => {
    _formData.value = Object.assign({}, _formData.value, data);
  };

  // 获取表单数据
  const formData: { [key: string]: any } = computed(() =>
    cloneDeep(_formData.value)
  );

  return {
    updataFormData,
    formData,
  };
};
