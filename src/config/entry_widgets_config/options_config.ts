type options_type = {
  [key: string]: {
    name: string;
    [key: string]: any;
  };
};

const options: options_type = {
  "el-input": {
    name: "",
    maxlength: null, // 最大输入长度
    minlength: null, // 最小输入长度
    "show-word-limit": false, // 是否显示输入字数统计
    placeholder: "请输入", // 输入框占位文本
    clearable: false, // 是否可清空
    disabled: false, // 是否禁用
    "prefix-icon": "", // 输入框头部图标
    "suffix-icon": "", // 输入框尾部图标
    readonly: false, // 完全只读
    default_value: "99", // 输入框默认值
  },
  "el-select": {
    name: "",
  },
};

export default options;
