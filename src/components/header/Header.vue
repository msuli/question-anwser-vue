<template>
    <div>
        <ul class="uk-subnav uk-subnav-pill">
            <router-link tag="li" to="/" active-class="uk-active" exact>
                <a>竞赛题</a>
            </router-link>
            <router-link tag="li" to="/addQuote" active-class="uk-active">
                <a>add quote</a>
            </router-link>
            <router-link tag="li" to="/user" active-class="uk-active">
                <a>user</a>
            </router-link>
            <router-link tag="li" to="/anotherUser" active-class="uk-active">
                <a>another user</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default{

    }
</script>