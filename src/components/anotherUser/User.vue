<template>
    <div>
        <h1>the user page</h1>
        <button
                class="uk-button uk-button-primary"
                @click="navigateToHome"
        >back to home</button>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {
            navigateToHome(){
                this.$router.push('/')
            }
        }
    }
</script>