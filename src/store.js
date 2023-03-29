import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    seriesList: [],
    searchKey: "",
    apiMovie: "https://api.themoviedb.org/3/search/movie?",
    apiKey: "4d42d2e6256d9a6ee5ba59fbc6ed2de6",
    lang: "en-Us",
});