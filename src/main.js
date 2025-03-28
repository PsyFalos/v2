// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 新引入

// 新引入
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
document.title = "久达自动化平台";


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
