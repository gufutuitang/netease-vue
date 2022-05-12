<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="result" :title="'推荐音乐'" @selected="fatherSelectItem"></Personalized>
        <Personalized :personalized="songList" :title="'最新专辑'" @selected="fatherSelectItem"></Personalized>
        <SongList :songs="songs"></SongList>

      </div>
    </ScrollView>
    <router-view></router-view>
  </div>
</template>

<script>
// 1
import { getBanner, getPersonalized, getAlbumNewest, getNewSong } from '../api/index';
import Personalized from '../components/Recommend/Personalized';
import Banner from '../components/Recommend/Banner';
import SongList from '../components/Recommend/SongList'
import ScrollView from '../components/ScrollView';
export default {
  name: 'Recommend',
  // 2
  data() {
    return {
      banners: [],
      result: [],
      songList: [],
      songs: []
    }
  },
  // 3 banner
  async created() {
    // 
    const { data } = await getBanner()
    this.banners = data.banners
    // console.log(this.banners);

    const res = await getPersonalized()
    // console.log(res);
    this.result = res.data.result

    const ls = await getAlbumNewest()
    // console.log(ls);
    this.songList = ls.data.albums

    getNewSong().then(res => {
      // res.data.albums.length = 6
      // this.album = res.data.albums.splice(0, 6)
      // this.songs = res.data.result
      // console.log('newsongs=', res.data.result)
      this.songs = res.data.result
    })

  },
  components: { Banner, Personalized, SongList, ScrollView },
  methods: {
    fatherSelectItem(id) {
      this.$router.push({
        path: `/recommend/detial/${id}`
      })
      console.log(this.$route)
    }
  }
}
</script>

<style scoped lang="scss">
.recommend {
  position: fixed;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
