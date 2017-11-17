<template>
    <div>
        <h1>user edit</h1>
        <p>edit me</p>
        <p>user age: {{ myAge }}</p>
        <button class="uk-button uk-button-primary"
        @click="resetAge">reset age</button>
    </div>
</template>
<script>
    import {eventBus} from '../main';
    export default {
        props: {
            myAge: Number
        },
        methods:{
            resetAge(){
                this.myAge = 29;
                eventBus.changeAge(this.myAge);
            }
        }
    }
</script>