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
    routes
})
new Vue({
  el: '#app',
    store,
    router,
  render: h => h(App)
})
