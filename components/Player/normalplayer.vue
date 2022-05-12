<template>
    <div class="normal" >
    <PlayerHead></PlayerHead>
    <Playerbody></Playerbody>
    <PlayerStdio></PlayerStdio>
    </div>
</template>

<script>

import PlayerHead from '../Player/PlayerHead';
import Playerbody from './PlayerBody';
import PlayerStdio from './PlayerStdio';
export default {
    name: 'normalplayer',
    components:{ 
        PlayerHead,
        Playerbody,
        PlayerStdio
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

</style>
