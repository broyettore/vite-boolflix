<script>
import { store } from '../store';
import searchBar from './searchBar.vue';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        searchBar
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
    <div class="container ms-ctn py-3 d-flex align-items-center justify-content-between">
        <div class="menu d-flex align-items-center">
            <h1 class="me-4 fs-1">
                <a href=".">Boolflix</a>
            </h1>
            <nav class="d-lg-flex align-items-center d-none">
                <ul class="d-flex">
                    <lI class="m-2 p-2">
                        <a href="#">Tv Shows</a>
                    </lI>
                    <lI class="m-2 p-2">
                        <a href="#">Movies</a>
                    </lI>
                    <lI class="m-2 p-2">
                        <a href="#">Originals</a>
                    </lI>
                    <lI class="m-2 p-2">
                        <a href="#">Recently Watched</a>
                    </lI>
                    <lI class="m-2 p-2">
                        <a href="#">My List</a>
                    </lI>
                </ul>
            </nav>
        </div>
        <searchBar @findMovie="getResult"></searchBar>
    </div>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

header {
    background-color: $bg-color;
    color: $font-color;

    h1 {

        &:hover {
            transform: scale(1.1);
            transition: ease .40s;
        }

        a {
            color: crimson;
        }
    }

    a {
        color: $font-color;

        &:hover {
            color: crimson;
            transition: color .30s;
        }
    }
    .ms-ctn {
        height: 100%;
    }
}
</style>