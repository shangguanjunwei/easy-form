import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";

type list_item = {
  id: string;
  [key: string]: any;
};

const list = ref<list_item[]>([{ id: uuidv4(), children: [] }]);
const _active_element_id = ref<string>(""); // 当前选中的元素id

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

export const useListMixin = () => {
  // 更新当前选中的元素id
  const updata_active_id = (id: string) => {
    _active_element_id.value = id;
  };
  const updata_options = (obj: Object) => {
    setItemValue(list.value, "options", obj);
  };
  // 更新当前选中的元素
  const updata_form_item_options = (obj: Object) => {
    setItemValue(list.value, "form_item_options", obj);
  };
  // 当前选中的元素 id
  const active_element_id = computed(() => _active_element_id.value);
  return {
    list,
    active_element_id,
    updata_active_id,
    updata_options,
    updata_form_item_options,
  };
};
