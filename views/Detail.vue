<template>
  <div class="datail">
    <DetailHeader :playlist="playlist"/>
    <!-- <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop> -->
    <ScrollView ref="scrollview">
      <div class="bottom">
        <SubHeader :playlist="playlist"></SubHeader>
        <DetailButtom :playlist="playlist.data.playlist.tracks"></DetailButtom>
        <!-- 组件使用方法：
        1.引入 import DetailButtom from './'
        格式：import（关键字）DetailButtom(自定义标签名称) from '(引号内为路径)'
        2.注册 export default {
          name:'',
          component(！！！component component component component 重要的事情说三遍!!!):{
            写组件名称（之后会当标签使用）        
          }
        }
        3.使用 <DetailButtom></DetailButtom>
        4.为标签注册事件 
        -->
      </div>
    </ScrollView>
  </div>

</template>
<script>
import SubHeader from '../components/detial/SubHeader'
import DetailHeader from '../components/detial/DetailHeader'
// import DetailTop from '../components/detail/DetailTop'
import DetailButtom from '../components/detial/DetailButtom'
import ScrollView from '../components/ScrollView'
// import { getPlayList } from '../api/index'
export default {
  name: 'Detail',
  components: {
    SubHeader,
    DetailHeader,
    // DetailTop,
    DetailButtom,
    ScrollView
  },
  data() {
    return {
      playlist: {}
    }
  },
  async created() {
    // console.log(this.$route);
   const data= await getPlayList({ id: this.$route.params.id })
      this.playlist = data
      console.log(this.playlist);
      console.log(this.playlist);
      // playlist = this.res
      // this.playlist = res.data.playlist
    }
}

    //  if (this.$route.params.type === 'personalized') {
    //     getPlayList({ id: this.$route.params.id }).then(res => {
    //       this.playlist = res.data.playlist
    //     })
    //   } else if (this.$route.params.type === 'album') {
    //     getAlbum({ id: this.$route.params.id }).then(res => {
    //       console.log(res)
    //       this.playlist = {
    //         name: res.data.album.name,
    //         coverImgUrl: res.data.album.picUrl,
    //         tracks: res.data.songs
    //       }
    //     })
    //   } else if (this.$route.params.type === 'singer') {
    //     getArtistsSongs({ id: this.$route.params.id }).then(res => {
    //       console.log(res)
    //       this.playlist = {
    //         name: res.data.artist.name,
    //         coverImgUrl: res.data.artist.picUrl,
    //         tracks: res.data.hotSongs
    //       }
    //     })
    //   } else if (this.$route.params.type === 'rank') {
    //     getTopList({ id: this.$route.params.id }).then(res => {
    //       console.log(res)
    //       this.playlist = {
    //         name: res.data.playlist.name,
    //         coverImgUrl: res.data.playlist.creator.backgroundUrl,
    //         tracks: res.data.playlist.tracks
    //       }
    //     })
    //   }
  
</script>

<style scoped lang="scss">
// @import "src/assets/css/mixin";
// @import "src/assets/css/variable";

//.datail{
//position: fixed;
//  top: 0;
//  bottom: 0;
//  z-index: 999;
//  left: 0;
//  right: 0;
//  @include bg_sub_color();
//  .bottom{
//    position: fixed;
//    top: 500px;
//    bottom: 0;
//    left: 0;
//    right: 0;
//    //width: 100%;
//    //height: 100%;
//  }
//}
.detail-father {
  height: 100%;
  overflow: hidden;
}

.datail {
  position: fixed;
  background-color: red;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  // @include bg_sub_color();

  .bottom {
    position: fixed;
    top: 500px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
