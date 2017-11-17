<template>
    <div>
        <h2>you may view the user detail here!</h2>
        <div>many detailes:</div>
        <p>user Name: {{ swichName() }}</p>
        <p>user Age: {{ myAge }}</p>
        <button class="uk-button uk-button-primary"
        @click="nameWasChanged">reset name</button>
        <button class="uk-button uk-button-primary" @click="resetFn">reset name</button>
    </div>
</template>
<script>
    import {eventBus} from '../../main';
    export default {
        props: {
            myName: String,
            myAge: Number,
            resetFn: Function
        },
        data(){
            return {
            }
        },
        data(){
            return {
                userName: this.myName
            }
        },
        methods:{
            swichName(){
                return this.myName.split('').reverse().join('');
            },
            nameWasChanged(){
                this.myName = 'suli';
                this.$emit('nameChanged', this.myName);
            }
        },
        created(){
            eventBus.$on('ageWasReset', (age)=>{
                this.myAge = age;
            })
        }
    }
</script>