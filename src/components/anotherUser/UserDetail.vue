<template>
    <div>
        <p>userdetail</p>
        <p>user id is {{$route.params.id}}</p>
        <router-link
                tag="button"
                :to="'/anotherUser/' + $route.params.id+ '/edit'"
                class="uk-button uk-button-primary"
        >edit user</router-link>
        <router-link
                tag="button"
                :to="{name: 'userEdit', params: {id: $route.params.id}, query: {
                    name: 'suli', age: 29
                }}"
                class="uk-button uk-button-primary"
        >another edit user button</router-link>
    </div>
</template>