import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);

// 定义路由
const routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

// 创建 router 实例
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// 创建和挂载根实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
}).$mount('#app');
