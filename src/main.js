/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 10:11:17
 * @LastEditTime: 2022-01-15 12:38:09
 * @LastEditors: Gracia
 */
import {
  createApp
} from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./mock"
import axios from "axios";

import App from './App.vue'

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).use(ElementPlus)
app.mount('#app')