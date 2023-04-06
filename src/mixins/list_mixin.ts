import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { cloneDeep, isEmpty } from "lodash";

type list_item = {
  [key: string]: any;
};

const list = ref<list_item[]>([{ id: uuidv4(), children: [] }]);
const _active_element_id = ref<string>(""); // 当前选中的元素id
const _active_element = ref<list_item>(); // 当前选中的元素

// 更新当前选中的元素
const setItemValue = (
  list: list_item[],
  key: "form_item_options" | "options",
  data: any
) => {
  list.forEach((item: list_item) => {
    if (item.id === _active_element_id.value) {
      item[key] = Object.assign({}, item[key], data);
    } else {
      if (item.children) {
        setItemValue(item.children, key, data);
      }
    }
  });
};

// 找到选中的元素
const findItem = (list: list_item[]) => {
  let res: list_item = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item.id === _active_element_id.value) {
      res = cloneDeep(item);
    } else {
      if (!isEmpty(item.children)) {
        res = findItem(item.children);
      }
    }
  }
  return res;
};

export const useListMixin = () => {
  // 更新当前选中的元素id
  const updata_active_id = (id: string) => {
    _active_element_id.value = !id ? "" : id;
    _active_element.value = !id ? {} : findItem(list.value);
  };
  // 更新当前选中的元素 options
  const updata_options = (obj: Object) => {
    setItemValue(list.value, "options", obj);
  };
  // 更新当前选中的元素 form_item_options
  const updata_form_item_options = (obj: Object) => {
    setItemValue(list.value, "form_item_options", obj);
  };
  // 当前选中的元素 id
  const active_element_id = computed(() => cloneDeep(_active_element_id.value));
  // 当前选中的元素
  const active_element = computed(() => cloneDeep(_active_element.value));
  return {
    list,
    active_element_id,
    updata_active_id,
    updata_options,
    updata_form_item_options,
    active_element,
  };
};
