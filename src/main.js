import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { routes } from './router/routes';
import { store } from './store/store';
export const eventBus = new Vue({
    methods: {
      changeAge(age){
        this.$emit('ageWasReset', age);
      }
    }
});

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition){
            return savedPosition;
            //第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
        }
        if(to.hash){
            return {
                selector: to.hash
            }
        }
        return {x:0, y: 0}
    }
});

router.beforeEach((to, from, next)=> {
    console.log('before each');
    next();
})

new Vue({
  el: '#app',
    store,
    router,
  render: h => h(App)
})
