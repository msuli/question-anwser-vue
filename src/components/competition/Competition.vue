<template>
    <div>
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
    </div>
</template>
<script>
    import Question from './Question.vue';
    import Answer from './Answer.vue';
    export default{
        data(){
            return {
                mode: 'app-question'
            }
        },
        methods: {
            answered(event){
                if (event) {
                    this.mode = 'app-answer'
                } else {
                    alert('wrong, try again!');
                    this.mode = 'app-question'
                }
            }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>
<style>
    .uk-panel {
        margin: 0 auto;
    }
    .flip-enter {

    }

    .flip-enter-active {
        animation: flip-in .5s ease-out forwards;
    }

    .flip-leave {

    }

    .flip-leave-active {
        animation: flip-out .5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>