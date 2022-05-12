<template>
    <div class="tabbar">
        <router-link tag='div' class="item" to="/recommend">
            <span class="tabbar-recommend">推荐</span>
        </router-link>
        <router-link tag='div' class="item" to="/singer">
            <span class="tabbar-singer">歌手</span>
        </router-link>
        <router-link tag='div' class="item" to="/rank">
            <span class="tabbar-rank">排行</span>
        </router-link>
        <router-link tag='div' class="item" to="/search">
            <span class="tabbar-search">搜索</span>
        </router-link>
    </div>

</template>

<script>
export default {
    name: 'Tabbar',
    components: '',
    data() {
        return {}
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
@import '../assets/css/base.scss';

.tabbar {
    display: flex;
    line-height: 84px;
    width: 100%;
    border-bottom: 1px solid #666;
}

.item {
    flex: 1;
    text-align: center;
    @include font_size(14px);

}

.router-link-active {
    @include font_color();
    @include font_solid();
}
</style>
