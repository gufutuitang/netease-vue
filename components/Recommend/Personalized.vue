<template>
    <div>
        <div calss='leftbar'>{{ title }}</div>
        <div class='item'>
            <div v-for="result in personalized" @click='selectItem(result.id)' :key="result.id" class="result">
                <div class="theme">
                    <a :href="result.url">
                        <img v-lazy="result.picUrl" alt="">
                    </a>
                    <p class="name">
                        {{ result.name }}
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Personalized',
    props: {
        personalized: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            required: true,
        }, person: {
            type: Array,
            default: () => []
        },
    },
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
        selectItem(id) {
            // console.log(id)
            this.$emit('selected', id)
        }
    }
};
</script>

<style scoped lang="scss">
.item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .result {

        width: 33%;
        justify-content: space-between;

        // justify-content: space-evenly;
        a {
            width: 98%;
            display: block;

        }

        img {
            border-radius: 15px;
            vertical-align: bottom;
            width: 240px;
            height: 240px;
        }

        .name {
            text-align: center;
            font-size: 22px;
        }

    }
}
</style>
