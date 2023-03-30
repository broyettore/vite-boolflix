<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        CountryFlag
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
        <div class="list-ctn">
            <ul  class="my-2">
                <li>TItle : {{ title || name }}</li>
                <li>Original Title: {{ originalTitle|| originalName }}</li>
                <li>Original Language:    <country-flag :country='getFlag(originalLang)' size='small'/></li>
                <li>Vote: {{ getRoundedNum(vote) }}</li>
            </ul>
        </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/_partials/variables.scss' as *;

</style>