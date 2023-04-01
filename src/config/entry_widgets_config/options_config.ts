type options_type = {
    [key: string]: object
}

const options: options_type = {
    "el-input": {
        type: "text", // 输入框类型
        maxlength: 0, // 最大输入长度
        minlength: 0, // 最小输入长度
        "show-word-limit": false, // 是否显示输入字数统计
        placeholder: "请输入", // 输入框占位文本
        clearable: false, // 是否可清空
        "show-password": false, // 是否显示切换密码图标
        disabled: false, // 是否禁用
        "prefix-icon": "", // 输入框头部图标
        "suffix-icon": "", // 输入框尾部图标
        readonly: false, // 完全只读
        resize: "none", // 控制是否能被用户缩放
    },
    "el-select": {}
}

export default options;