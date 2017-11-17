<template>
    <div class="">
        <app-quote-bar></app-quote-bar>
        <app-add></app-add>
        <app-quote-grid></app-quote-grid>
        <hr>
        <hr>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
    </div>
</template>
<script>
    import Add from './quote/add.vue';
    import QuoteBar from './quote/quoteBar.vue';
    import QuoteGrid from './quote/quoteGrid.vue';
    import * as types from '../store/types';

    export default {
        computed: {
            value: {
                get(){
                    return this.$store.getters.value;
                },
                set(value){
                    this.$store.dispatch(types.UPDATE_VALUE, value);
                }
            }
        },
        components: {
            appAdd: Add,
            appQuoteGrid: QuoteGrid,
            appQuoteBar: QuoteBar
        }
    }
</script>
<style>
    .uk-progress {
        box-sizing: border-box;
        height: 20px;
        margin-bottom: 15px;
        background: #f7f7f7;
        overflow: hidden;
        line-height: 20px;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.07), inset 0 2px 2px rgba(0,0,0,.07);
        border-radius: 4px;
    }
    .uk-progress-success .uk-progress-bar {
        background-color: #82bb42;
        background-image: -webkit-linear-gradient(top,#9fd256,#6fac34);
        background-image: linear-gradient(to bottom,#9fd256,#6fac34);
    }
    .uk-progress-bar {
        width: 0;
        height: 100%;
        background: #009dd8;
        float: left;
        -webkit-transition: width .6s ease;
        transition: width .6s ease;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background-image: -webkit-linear-gradient(top,#00b4f5,#008dc5);
        background-image: linear-gradient(to bottom,#00b4f5,#008dc5);
        box-shadow: inset 0 -1px 0 rgba(0,0,0,.2), inset 0 0 0 1px rgba(0,0,0,.1);
        text-shadow: 0 -1px 0 rgba(0,0,0,.2);
    }
</style>