import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


/* 获取接口,挂载全局*/
import Api from './api/index'
Vue.prototype.$api = Api

/* UI 框架 */
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

/* 动画背景效果 */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

/* 生产环境关掉提示 */
Vue.config.productionTip = false  

console.log(Api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
