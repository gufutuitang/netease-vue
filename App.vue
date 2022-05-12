<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player ></Player>    
  </div>
</template>

<script>
import Player from '../src/views/player.vue'
import Header from './components/Header';
import Tabbar from './components/Tabbar';
export default {
  name: 'App',
  components: {
    'Header': Header,
    'Tabbar': Tabbar,
    'Player': Player,
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
@import './assets/css/base.scss';
@import "./assets/css/variable.scss";
@import './assets/css/mixin.scss';

div {
  // font-size: 40px;
  @include font_size(15px)
}

</style>

