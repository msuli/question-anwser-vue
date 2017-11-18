<template>
    <div>
        <p>userdetail</p>
        <p>user id is {{$route.params.id}}</p>
        <router-link
                tag="button"
                :to="'/anotherUser/' + $route.params.id+ '/edit'"
                class="uk-button uk-button-primary"
        >edit user
        </router-link>
        <router-link
                tag="button"
                :to="link"
                class="uk-button uk-button-primary"
        >another edit user button
        </router-link>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        name: 'suli',
                        age: 29
                    },
                    hash: '#data'
                }
            }
        }
    }
</script>