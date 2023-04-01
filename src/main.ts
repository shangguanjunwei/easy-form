import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.scss'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import "./style/element/index.scss"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, { locale: zhCn }).mount('#app')
