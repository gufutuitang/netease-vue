<template>
    <div class="header">
        <div class="header-right" @click="changeBk"></div>
        <p class="header-middle">{{ playlist.data.playlist.name }}</p>
        <div class="header-left"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: '',
    data() {
        return {

        };
    },
    props: {
        playlist: { type: Object, default: {} }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        changeBk() {
            window.history.back()
        }
        /* / changeTheme() {
        //     this.index++
        //     if (this.index >= this.themes.length) {
        //         this.index = 0
        //     }
        //     document.documentElement.setAttribute('data-theme', this.themes[this.index])
        / },
       */
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/css/mixin.scss';
@import '../../assets/css/base.scss';

.header {
    display: flex;
    // float: left;
    // background-color: red;
    @include bg_color();
    height: 100px;
    // height: 50px;
    width: 100%;
}

.header-middle {
    flex: 3;
    width: 60%;
    // margin-top: 18px;
    // float: left;
    color: rgb(255, 255, 255);
    display: inline-block;
    text-align: center;
    font-size: 30px;
    // transform: translateX(50%);
}

.header-right {
    flex: 1;
    margin: 0 auto;
    background-size: 100px 100px;
    // @include bg_img('../../assets/images/logo'); 
    background-image: url('../../assets/images/back_163@3x.png');
    background-repeat: no-repeat;
}

.header-left {
    flex: 1;
    margin: 0 auto;
    // display: inline-block;
    // transform: translateX(40px);
    // z-index: 1;

    background-size: 100px 100px;
    // @include bg_img('../../assets/images/account');
    background-image: url('../../assets/images/more_163@3x.png');
    background-repeat: no-repeat;
}
</style>
