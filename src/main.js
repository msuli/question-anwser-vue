import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
export const eventBus = new Vue({
    methods: {
      changeAge(age){
        this.$emit('ageWasReset', age);
      }
    }
});

new Vue({
  el: '#app',
    store,
  render: h => h(App)
})
