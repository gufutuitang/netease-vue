<template>

    <div class="blurBg">
        <img  src="../../assets/images/bg.jpg" alt="">
    </div>

</template>

<script>
export default {
    name: 'PlayerBody',
    components: '',
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
.blurBg{
    width: 100%;
  height: 100%;
    position: absolute;
    overflow: hidden;
    img{
        
        position: relative;
        top:50%;
        left:50%;
        display: block;
        min-width: 100%;
        min-height: 100%;
        transform:translate(-50%,-50%)
    }

}
</style>
