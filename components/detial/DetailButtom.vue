<template>
    <div class="list-box">
        <div>{{playlist}}</div>
        <!-- <div class="list-item" v-for="item in playlist.data.playlist " :key="item.id">
            <div class='music-name'>{{ item.name }}</div>
            <div class='music-auther'>{{ item.ar[0].name }} - {{ item.al.name }}
            </div>
        </div> -->


    </div>
</template>

<script>
export default {
    name: 'DetailButtom',
    components: '',
    //接收父组件的playlist数据定义在props内接收。后面定义属性类型：属性名必须大写，默认值设为空。
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
@import '../../assets/css/base.scss';

.list-box {
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 500px;
    border-radius: 20px;
}

.list-item {
    position: relative;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid rgb(124, 117, 117)
}

.music-name {
    position: absolute;
    top: 25px;
    left: 20px;
    // @include no-wrap();
    @include font_size(22px);
    color: rgb(142, 136, 136);
}
</style>
