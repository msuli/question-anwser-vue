import * as types from '../types';
const state = {
    quotes: [],
    maxQuote: 10,
};

const getters = {
    [types.WIDTH]: state => {
        return state.quotes.length * 10 + '%';
    },
    [types.QUOTES]: state => {
        return state.quotes;
    }
};

const mutations = {
    [types.ADD_QUOTE]: (state, quote) => {
        if (state.quotes.length === state.maxQuote) {
            alert('已经达到最大长度');
            return;
        };
        state.quotes.push(quote);
    },
    [types.DELETE_QUOTE]: (state, index) => {
        state.quotes.splice(index, 1);
    }
};

const actions = {
    [types.QUOTE_DELETED]:({commit}, index) => {
        setTimeout(()=>{
            commit(types.DELETE_QUOTE, index)
        },1000);

    }
};

export default{
    state,
    getters,
    mutations,
    actions
}