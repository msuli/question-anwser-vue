<template>
    <div class="uk-alert uk-alert-success uk-width-medium-1-2 uk-container-center">
        <h2 class="uk-text-center">that's correct!</h2>
        <button class="uk-button uk-button-primary" @click="nextQuestion">next question</button>
    </div>
</template>
<script>
    export default {
        methods:{
            nextQuestion(){
                this.$emit('confirmed');
            }
        }
    }
</script>