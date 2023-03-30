<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            imageSize: "https://image.tmdb.org/t/p/w185/",
            store,
        }
    },

    components: {
        CountryFlag,
        FontAwesomeIcon
    },

    methods: {

        getRoundedNum(element) {
            if (isNaN(element)) {
                return 0
            }
            return Math.ceil(element / 2)
        },
        getFlag(element) {
            switch(element) {

                case "en":
                        return "gb";
                case "ko": 
                    return "kr";
                case "ja": 
                    return "jp";
                case "he": 
                    return "li";

                default: 
                    return element;
            }
     }
    },
    props: {
        img: String,
        title: String,
        name: String,
        originalTitle: String,
        originalName: String,
        originalLang: String,
        vote: Number,
    }

}
</script>

<template>
            <div  class="my-2 list-ctn text-center">
                <div class="card-top">
                    <img :src="imageSize+img" alt="image not available">
                </div>
                <div class="card-info">
                    <ul>
                        <li>TItle : {{ title || name }}</li>
                        <li>Original Title: {{ originalTitle|| originalName }}</li>
                        <li>Original Language:    <country-flag :country='getFlag(originalLang)' size='small'/></li>
                        <li>Vote: 
                            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getRoundedNum(vote)" />
                            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getRoundedNum(vote)" />
                        </li>
                    </ul>
                </div>
            </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

.list-ctn {
     color: $font-color;

    .card-top {
        height: 278px;
    }

    li {
        padding: 1px 0;
    }
}

</style>