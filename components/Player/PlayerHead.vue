<template>
    <div  class='head' style=" background-color:red">
       <div  @click=change() class='head-left'><img src="../../assets/images/account_163@3x.png"></div>
       <div class="a1 head-mid">
           <div>歌曲名称</div><div class="h2">乐队名称</div>
        </div>
       <div class='head-right'><img src="../../assets/images/account_163@3x.png"></div>
    </div>
</template>

<script>
import {mapAction, mapActions} from 'vuex'
export default {
    name: 'PlayerHead',
    components: '',
    data() {
        return {

        };
    },
    created() {
    // getPlayList({ id: this.$route.params.id }).then(res => {
    //   this.playlist = res
    //   console.log(this.playlist);
    // })
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'setFullScreen'
        ]),
        change(){
            this.setFullScreen(false)
        },
        
    }
};
</script>

<style scoped lang="scss">
    .head{
        // height: 40%;
        display: flex;
        .head-left{
        height:100%;
        }
        .head-right{
           height:100%;
        }
    }
    img{
        // margin-top: 3px;
        display: block;
        width:100%;
        height:100%;
    }
    .h2{
        font-size: 16px;
    }
    .a1{
        flex:4;
        text-align: center;
        color:white;
        font-size: 26px;
        transform: translateY(26%);
        // line-height: px;
        // overflow: hidden;
    }
</style>
