/*
 * @Date: 2021-03-20 18:13:09
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-21 19:13:04
 */
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
