<template>
    <div class="uk-container uk-container-center">
        <!--<app-header></app-header>-->
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
    </div>
</template>
<script>
    import Header from './components/header/Header.vue';
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style scoped>
    .slide-leave-active {
        opacity: 0;
        transition: opacity 1s ease;
        animation: slide-out 1s ease forwards;
    }

    .slide-leave {
        opacity: 1;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        opacity:1;
        transition: opacity 1s ease;
        animation: slide-in 1s ease forwards;
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

</style>
