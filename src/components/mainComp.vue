<script>
import { store } from '../store';

export default {
    data() {
        return {
            alertMsg: "",
            store,
        }
    },

    methods: {

        getRoundedNum(element) {
            if (isNaN(element)) {
                return 0
            }
            return Math.ceil(element)
        },

        getFlag(element) {
            if (element === "en") {
                return "https://flagsapi.com/US/flat/24.png"
            } else if (element === "fr") {
                return "https://flagsapi.com/FR/flat/24.png"
            } else if (element === "ko") {
                return "https://flagsapi.com/KR/flat/24.png"
            } else if (element === "ja") {
                return "https://flagsapi.com/JP/flat/24.png"
            } else if (element === "cn") {
                return "https://flagsapi.com/CN/flat/24.png"
            } else if (element === "es") {
                return "https://flagsapi.com/ES/flat/24.png"
            } else if (element === "pt") {
                return "https://flagsapi.com/PT/flat/24.png"
            } else if (element === "de") {
                return "https://flagsapi.com/DE/flat/24.png"
            } else if (element === "ar") {
                return "https://flagsapi.com/SA/flat/24.png"
            } else if (element === "it") {
                return "https://flagsapi.com/IT/flat/24.png"
            } else if (element === "ru") {
                return "https://flagsapi.com/RU/flat/24.png"
            } else {
                return element
            }
        },
    },
}
</script>

<template>
<header>
    <main>
        <div class="container ms-ctn p-2 d-flex flex-column justify-content-startalign-items-start">
            <div class="input-group mb-5 ms-search">
                <input type="text" class="form-control ms-input" v-model="store.searchKey" placeholder="search a movie..." aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary ms-btn" @click="$emit('findMovie')" type="button" id="button-addon2">Go !</button>
            </div>
            <div class="list-ctn" v-if="store.resultList.length > 0">
                <ul v-for="movie in store.resultList" class="my-2">
                <li>TItle : {{ movie.title || movie.name }}</li>
                <li>Original Title: {{ movie.original_title || movie.original_name }}</li>
                <li>Original Language: <img :src="getFlag(movie.original_language)" alt=""></li>
                <li>Vote: {{ getRoundedNum(movie.vote_average) }}</li>
            </ul>
            </div>
            <div class="alert" v-else>
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

        .ms-search {
            width: 30%;

            .ms-input:focus {
                outline: none;
            }

            .ms-btn {
                background-color: crimson;
                color: #fff;
            }
        }
    }
}
</style>