<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="input-group mb-4 ms-search">
        <input type="text" class="form-control ms-input" v-model="store.searchKey" placeholder="search a movie..." aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary ms-btn" @click="$emit('findMovie')" type="button" id="button-addon2">Go !</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;
    .ms-search {
        width: 30%;
        .ms-input:focus {
            box-shadow: none;
            outline: none;
            border-color: 0;
        }

        .ms-btn {
            background-color: crimson;
            color: #fff;
        }
    }
</style>