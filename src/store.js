import { reactive } from "vue";

export const store = reactive({
    resultList: [],
    searchKey: "",
    apiMultiSearch: "https://api.themoviedb.org/3/search/multi?",
    apiKey: "4d42d2e6256d9a6ee5ba59fbc6ed2de6",
    lang: "en-Us",
});