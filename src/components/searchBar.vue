<script>
import { store } from '../store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        FontAwesomeIcon,
    }
}
</script>

<template>
    <div>
        <label for="searchBar"></label>
        <input type="text" v-model="store.searchKey" @keyup.enter="$emit('findMovie')" placeholder="search a movie..." id="searcBar" class="searchBar">
        <button class="ms-btn" @click="$emit('findMovie')">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

.searchBar {
    border: 0;
    background-color: lighten($bg-color, 50%);
    border-radius: 10px 0 0 10px;
    padding: 2px 6px;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 3px 3px #FF2B5B;
    }
}

.ms-btn {
    background-color: crimson;
    color: $font-color;
    border: 0;
    border-radius: 0 10px 10px 0;
    padding: 2px 6px;
}

</style>