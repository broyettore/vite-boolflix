<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
<header>
    <div class="container ms-ctn p-2"></div>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

header {
    background-color: $bg-color;
    color: $font-color;
    height: 60px;

    .ms-ctn {
        height: 100%;
    }
}
</style>