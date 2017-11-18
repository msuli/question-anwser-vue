<template>
    <div>
        <h1>edit user</h1>
        <p>第一个参数：{{$route.query.name}}</p>
        <p>第一个参数：{{$route.query.age}}</p>
        <button class="uk-button uk-button-primary"
        @click="prevPage">返回上一页</button>
    </div>
</template>
<script>
    export default {
        methods: {
            prevPage(){
                this.$router.push({name: 'userStart', id: this.$route.params.id})
            }
        }
    }
</script>