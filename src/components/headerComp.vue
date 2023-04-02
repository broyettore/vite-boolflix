<script>
import { store } from '../store';
import searchBar from './searchBar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            isActive: false,
            store,
        }
    },
    components: {
        searchBar,
        FontAwesomeIcon,
    },
    methods: {

        getResult() {
                this.$emit('filterResult')
        },
},
}
</script>

<template>
<header>
    <div class="ms-ctn py-3 px-2 d-flex align-items-center justify-content-between">
        <div class="menu d-flex align-items-center">
            <h1 class="me-4 fs-1">
                <a href=".">Boolflix</a>
            </h1>
            <nav class="d-lg-flex align-items-center">
                <ul class="d-none d-lg-flex">
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
        <div class="btn-group d-lg-none ms-drop-group">
            <button type="button" class="btn btn-secondary ms-drop-btn" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
            <ul class="dropdown-menu dropdown-menu-end ms-drop px-2">
                <li>
                    <searchBar @findMovie="getResult" class="py-2 px-3"></searchBar>
                </li>
                <li>
                    <a class="dropdown-item ms-drop-item py-2" href="#">Tv Show</a>
                </li>
                <li>
                    <a class="dropdown-item ms-drop-item py-2" href="#">Movies</a>
                </li>
                <li>
                    <a class="dropdown-item ms-drop-item py-2" href="#">Originals</a>
                </li>
                <li>
                    <a class="dropdown-item ms-drop-item py-2" href="#">Recently Watched</a>
                </li>
                <li>
                    <a class="dropdown-item ms-drop-item py-2" href="#">My List</a>
                </li>
            </ul>
       </div>
        <searchBar @findMovie="getResult"  class="d-none d-lg-block"></searchBar>
    </div>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

header {
    background-color: $bg-hover-color;
    color: $font-color;
    position: fixed;
    width: 100%;
    z-index: 1000;
    .ms-drop-group {
        width: 50px;

        .ms-drop-btn {
        background-color: $header-color;
        border: 0;
        border-radius: 10px;
    }

    .ms-drop {
        background-color: $bg-color;
        max-width: 992px;
        width: 100vw;
        text-align: right;

        .ms-drop-item:hover {
            background-color: $header-color;
            color: $font-color;
            transition: background-color .30s;
        }
    }
    }

    h1 {

        &:hover {
            transform: scale(1.1);
            transition: ease .40s;
        }

        a {
            color: $header-color;
        }
    }

    a {
        color: $font-color;

        &:hover {
            color: $header-color;
            transition: color .30s;
        }
    }
    .ms-ctn {
        height: 100%;
        max-width: 1452px;
        margin: 0 auto;
    }
}
</style>