import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import "./style/element/index.scss"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn }).mount('#app')
