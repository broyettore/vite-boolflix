<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next';
import cardComp from './cardComp.vue';

export default {
    data() {
        return {
            alertMsg: "No result found, Please try again....",
            store,
        }
    },

    components: {
        CountryFlag,
        cardComp,
    },
}
</script>

<template>
<header>
    <main>
        <div class="container ms-ctn p-2 d-flex align-items-center justify-content-center">
            <div class="row row-cols-1 d-flex justify-content-center">
                <cardComp class="col" v-for="result in store.resultList.slice(0, 18)" :img="result.poster_path" :title="result.title" :name="result.name" :originalTitle="result.original_title" :originalName="result.original_name" :originalLang="result.original_language" :vote="result.vote_average" :summary="result.overview" />
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
    padding: 40px;

    .ms-card-ctn {
        width: 100%;
    }

}
</style>