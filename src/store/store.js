import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'
import  actions from './actions';
import  mutations from './mutations';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations,
    actions,
    modules: {
        counter
    }
})