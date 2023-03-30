<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next';
import searchBar from './searchBar.vue';
import cardComp from './cardComp.vue';

export default {
    data() {
        return {
            alertMsg: "No result...",
            store,
        }
    },

    components: {
        CountryFlag,
        searchBar,
        cardComp
    },

    methods: {

     getResult() {
                this.$emit('filterResult')
            }
    },

}
</script>

<template>
<header>
    <main>
        <div class="container ms-ctn p-2 d-flex flex-column justify-content-startalign-items-start">
            <searchBar @findMovie="getResult"></searchBar>
            <cardComp v-for="result in store.resultList" :title="result.title" :name="result.name" :originalTitle="result.original_title" :originalName="result.originalName" :originalLang="result.original_language" :vote="result.vote_average"></cardComp>
            <div class="alert" v-if="store.resultList.length === 0">
                <p>{{ alertMsg }}</p>
            </div>
        </div>
    </main>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

main {
    color: $font-color;
    height: calc(100vh - 60px);

    .ms-ctn {
        height: 100%;
        overflow-y: scroll;
    }
}
</style>