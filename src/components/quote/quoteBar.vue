<template>
    <div>
        <h3>quotes added</h3>
        <div class="uk-progress uk-progress-success uk-progress-small">
            <div class="uk-progress-bar" :style="{'width': width}">{{ width }}</div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';

    import * as types from '../../store/types';
    export default{
       computed: {
           ...mapGetters({
               width: types.WIDTH
           })
       }
    }
</script>