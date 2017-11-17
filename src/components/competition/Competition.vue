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
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';
    export default{
        data(){
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
        }
    }
</script>