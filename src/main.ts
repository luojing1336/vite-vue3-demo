import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'element-plus/dist/index.css'
import { Button } from 'vant'

createApp(App).use(router).use(store).use(ElementPlus).use(Button).mount('#app')
