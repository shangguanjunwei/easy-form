type options_type = {
  prop: string;
  [key: string]: any;
};

const form_item_options: options_type = {
  prop: "", // 组件的prop
  label: "", // 组件的label
  "label-width": null, // 组件的label宽度
  required: false, // 是否必填
  rules: [], // 验证规则
  "show-message": true, // 是否显示校验错误信息
  "inline-message": false, // 以行内形式展示校验信息
  size: "default", // 输入框尺寸
};

export default form_item_options;
