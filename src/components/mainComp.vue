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
        cardComp,
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
        <div class="container ms-ctn p-2 d-flex flex-column  align-items-center">
            <searchBar @findMovie="getResult"></searchBar>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5  ms-card-ctn">
                <cardComp class="col" v-for="result in store.resultList" :img="result.poster_path" :title="result.title" :name="result.name" :originalTitle="result.original_title" :originalName="result.original_name" :originalLang="result.original_language" :vote="result.vote_average" />
            </div>
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

    .ms-card-ctn {
        width: 100%;
    }

}
</style>