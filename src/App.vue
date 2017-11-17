<template>
    <div class="uk-container uk-container-center">
        <app-header></app-header>
        <router-view></router-view>
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
