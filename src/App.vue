<template>
    <div class="uk-container uk-container-center">
        <routerview></routerview>
        <!--<app-user></app-user>-->
        <app-add-quote></app-add-quote>
    </div>
</template>

<script>

    import User from './components/user.vue';
    import AddQuote from './components/AddQuote.vue';

    export default {
        name: 'app',
        data () {
            return {
                mode: 'app-question'
            }
        },

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
