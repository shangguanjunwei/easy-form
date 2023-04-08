import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { cloneDeep, isEmpty } from "lodash";

type list_item = {
  [key: string]: any;
};

const list = ref<list_item[]>([{ id: uuidv4(), children: [] }]);
const _active_element = ref<any>(); // 当前选中的元素

export const useListMixin = () => {
  // 更新当前选中的元素
  const updata_active_element = (element: Object) => {
    console.log('执行选中元素')
    _active_element.value = element;
  };
  // 删除当前选中的元素
  const delete_active_element = () => {
    _active_element.value = {};
  };
  // 更新当前选中的元素 options
  const updata_options = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      _active_element.value.options[key] = obj[key];
    });
  };
  // 更新当前选中的元素 form_item_options
  const updata_form_item_options = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      _active_element.value.form_item_options[key] = obj[key];
    });
  };
  // 当前选中的元素
  const active_element = computed(() => cloneDeep(_active_element.value));

  return {
    list,
    updata_active_element,
    delete_active_element,
    updata_options,
    updata_form_item_options,
    active_element,
  };
};
