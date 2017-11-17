<template>
    <div id="app" class="uk-container uk-container-center">
        <h1 class="uk-text-center">极好的竞赛题</h1>
        <hr>
        <transition name="flip" mode="out-in">
            <!--动态组件-->
            <component
                    :is="mode"
                    @confirmed="mode='app-question'"
                    @answered="answered($event)"
            ></component>
        </transition>
        <hr>
    <!--<app-user></app-user>-->
        <app-add-quote></app-add-quote>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';
    import User from './components/user.vue';
    import AddQuote from './components/AddQuote.vue';

    export default {
        name: 'app',
        data () {
            return {
                mode: 'app-question'
            }
        },
        methods: {
            answered(event){
                if(event){
                    this.mode = 'app-answer'
                }else{
                    alert('wrong, try again!');
                    this.mode = 'app-question'
                }
            }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer,
            appUser: User,
            appAddQuote: AddQuote
        }
    }
</script>

<style scoped>
    .uk-panel {
        margin: 0 auto;
    }
    .flip-enter{

    }
    .flip-enter-active{
        animation: flip-in .5s ease-out forwards;
    }
    .flip-leave{

    }
    .flip-leave-active{
        animation: flip-out .5s ease-out forwards;
    }
    @keyframes flip-out {
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }
    @keyframes flip-in {
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }
</style>
