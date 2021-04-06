/*
 * @Date: 2021-03-20 18:13:09
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-06 22:17:35
 */
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://baize.dev.builds.ninja:7070/api/v1' : 'http://127.0.0.1:7070/api/v1'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.axios = axios
new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
