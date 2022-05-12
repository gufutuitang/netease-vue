<template>
    <div v-show="this.isFullScreen">        
        <NormalPlayer></NormalPlayer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NormalPlayer from '../../src/components/Player/normalplayer';
export default {
    name: 'palyer',
    computed:{
        ...mapGetters([
            'isFullScreen',
        ])
    },
    components: {
        NormalPlayer,
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="scss">
body {
    display: flex;
    width: 100%;
    background-color: #f00;
}
</style>
