import { v4 as uuidv4 } from 'uuid';
// 输入型字段组件配置
import entry_configs from './entry_widgets_config/base_config';
// 输入型字段组件基本options配置
import entry_options from './entry_widgets_config/options_config';
// 非输入型字段组件配置
import pot_configs from './pot_widgets_config/base_config';

const left_aside_config = [
    {
        title: '基础字段',
        config_list: entry_configs.map(item =>
            Object.assign(item,
                {
                    id: uuidv4(),
                    options: entry_options[item.type]
                }
            )
        )
    },
    {
        title: '容器',
        config_list: pot_configs.map(item =>
            Object.assign(item,
                {
                    id: uuidv4(),
                    options: entry_options[item.type]
                }
            )
        )
    },
]

export default left_aside_config.map((item) => Object.assign(item, { id: uuidv4() }));  