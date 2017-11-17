<template>
    <div>
        <div class="uk-panel uk-panel-box">
        <h1>user component</h1>
            <button class="uk-button uk-button-primary"
            @click="changeName">change my name</button>
            <p>my name is {{ name }}</p>
            <p>my age is {{ age }}</p>
            <div class="uk-grid">
                <div class="uk-width-1-2">
                    <app-user-detaile
                    :myName="name" :myAge="age"
                    @nameChanged="name=$event"
                    :resetFn="resetName"></app-user-detaile>
                </div>
                <div class="uk-width-1-2">
                    <app-user-edit :myAge="age" @ageWasReset="age=$event"></app-user-edit>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import UserEdit from './userEdit.vue';
    import UserDetail from './userDetail.vue';
    export default {
        data(){
            return {
                name: 'suli',
                age: 28
            }
        },
        methods: {
            changeName(){
                this.name = 'liusu';
            },
            resetName(){
                this.name = 'suli';
            }
        },
        components: {
            appUserDetaile: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>