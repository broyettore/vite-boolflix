import { reactive } from "vue";

export const store = reactive({
    endpoints: {
        movie: "https://api.themoviedb.org/3/search/movie?",
        series: "https://api.themoviedb.org/3/search/tv?",
        MultiSearch: "https://api.themoviedb.org/3/search/multi?",
    },
    resultList: [],
    searchKey: "",
    apiKey: "4d42d2e6256d9a6ee5ba59fbc6ed2de6",
});