<template>
    <div>
        <img :src="playlist.data.playlist.coverImgUrl" alt="">
    </div>
</template>

<script>
export default {
    name: 'SubHeader',
    components: '',
    props: {
        playlist: { type: Object, default: {} }
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
img{
    transform: translateY(-52%);
    width: 100%;
}
</style>
