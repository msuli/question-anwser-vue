<template>
    <ul class="uk-grid-width-1-4">
        <li v-for="(q,i) in quotes" @click="deleteQuote(i)">{{ q }}</li>
    </ul>
</template>
<script>
    import {mapActions} from 'vuex';

    import * as types from '../../store/types';

    export default{
        computed:{
            quotes(){
               return this.$store.getters[types.QUOTES];
            }
        },
        methods: {
            ...mapActions({
                deleteQuote: types.QUOTE_DELETED
            })
        }
    }
</script>