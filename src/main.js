/*
 * @Date: 2021-03-20 18:13:09
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-28 22:09:58
 */
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:7070/api/v1'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.axios = axios
new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
