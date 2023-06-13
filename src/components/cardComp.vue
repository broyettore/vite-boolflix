<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            imageSize: "https://image.tmdb.org/t/p/w342/",
            backupImg: "./",
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
        },
    },
    props: {
        info: Object,
    }

}
</script>

<template>
            <div  class="m-3 list-ctn">
                <div class="card-top">
                    <img :src="imageSize+info.poster_path" alt="image not available">
                    <font-awesome-icon icon="fa-regular fa-image" class="ms-backup" v-if="img === null"/>
                    <div class="card-info">
                        <ul>
                            <li>TItle : {{ info.title || info.name }}</li>
                            <li>Original Title: {{ info.original_title|| info.original_name }}</li>
                            <li>Original Language:    <country-flag :country='getFlag(info.original_language)' size='small'/></li>
                            <li>Vote: 
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in getRoundedNum(info.vote_average)" />
                                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getRoundedNum(info.vote_average)" />
                            </li> 
                            <li>Overview: {{ info.overview }}</li>
                        </ul>
                    </div>
                </div>
            </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;
.list-ctn {
     color: $font-color;
     width: 342px;
     height: 513px;
     opacity: 0;
     animation: fadeIn 1s 1.5s linear forwards;

     @keyframes fadeIn {

        0% {
            transform: translateY(-10%);
        }

        100% {
            transform: translateY(0%);
            opacity: 1;
        }
        
     }

    .card-top {
        position: relative;
        height: 100%;
        width: 100%;

        &:hover {
            transform: scale(1.05);
            transition: ease .40S;
        }

        &:hover .card-info {
            display: block;
            cursor: pointer;
        }

        img {
            height: 100%;
            width: 100%;
        }

        .ms-backup {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 5rem;
        }
        .card-info {
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            padding: 10px;
            background-color: $bg-hover-color;
            height: 100%;
            width: 342px;
            overflow-y: scroll;
        }
    
        li {
            padding: 1px 0;
        }
    }

}
</style>