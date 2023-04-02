import { v4 as uuidv4 } from 'uuid';
// 输入型字段组件配置
import entry_configs from './entry_widgets_config/base_config';
// 输入型字段组件基本options配置
import entry_options from './entry_widgets_config/options_config';
// 输入型字段组件form-item配置
import entry_form_item_options from './entry_widgets_config/form_item_config';
// 非输入型字段组件配置
import pot_configs from './pot_widgets_config/base_config';
// 非输入型字段组件基本options配置
import pot_options from './pot_widgets_config/options_config';
import { cloneDeep } from 'lodash';

const left_aside_config = [
    {
        title: '基础字段',
        config_list: entry_configs.map(item => {
            return Object.assign(
                {},
                { ...item },
                {
                    id: uuidv4(),
                    options: { ...entry_options[item.type] },
                    form_item_options: { ...entry_form_item_options }
                }
            )
        })
    },
    {
        title: '容器',
        config_list: pot_configs.map(item => {
            return Object.assign(item,
                {
                    id: uuidv4(),
                    options: { ...pot_options[item.type] },
                }
            )
        })
    },
]

export default left_aside_config.map((item) => Object.assign(item, { id: uuidv4() }));  