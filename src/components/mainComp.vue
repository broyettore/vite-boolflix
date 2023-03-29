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
    <main>
        <div class="container ms-ctn p-2 d-flex justify-content-center align-items-center">
            <ul>
                <li>Test</li>
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
    }
}
</style>