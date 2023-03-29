<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    methods: {

        getNum(element) {
            return Math.ceil(element)
        },
    }
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
            <ul>
                <li v-for="movie in store.resultList" class="p-2">TItle : {{ movie.title || movie.name }}, Original Title: {{ movie.original_title || movie.original_name }}, Original Language: {{ movie.original_language.toUpperCase() }}, Vote: {{ getNum(movie.vote_average) }}.</li>
            </ul>
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