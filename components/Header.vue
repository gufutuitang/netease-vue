<template>
    <div class="header" @click="changeTheme">
        <div class="header-right"></div>
        <p class="header-middle">网易云音乐</p>
        <div class="header-left"></div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: '',
    data() {
        return {
            index: 0,
            themes: ['theme', 'theme1', 'theme2']
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        changeTheme() {
            this.index++
            if (this.index >= this.themes.length) {
                this.index = 0
            }
            document.documentElement.setAttribute('data-theme', this.themes[this.index])
        }
    }
};
</script>

<style scoped lang="scss">
@import '../assets/css/mixin.scss';
@import '../assets/css/variable.scss';

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
    height: .5rem;
    height: 40px;


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
    @include bg_img('../assets/images/logo'); // background-image: url(../assets/images/logo_163@3x.png);
    background-repeat: no-repeat;
}

.header-left {
    flex: 1;
    margin: 0 auto;
    // display: inline-block;
    // transform: translateX(40px);
    // z-index: 1;

    background-size: 100px 100px;
    @include bg_img('../assets/images/account');
    background-repeat: no-repeat;
}
</style>
