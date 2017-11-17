<template>
    <div>
        <h1>add quote</h1>
        <input type="text" v-model="quote">
        <button class="uk-button uk-button-primary"
                @click="addQuote(quote)">add quote</button>
    </div>
</template>
<script>
    import * as types from '../../store/types';

    export default{
        data: function(){
            return {
                quote: '',
            }
        },
        methods: {
            addQuote(quote){
                this.$store.commit(types.ADD_QUOTE, quote);
            }
        }
    }
</script>