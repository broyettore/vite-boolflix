<script>
import axios from 'axios';
import { store } from './store';
import headerComp from './components/headerComp.vue';
import mainComp from './components/mainComp.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    headerComp,
    mainComp
  },
  methods: {

    searchMovie() {
      axios.get(this.store.apiMovie, {
        params: {
          api_key: this.store.apiKey,
          language: this.store.lang,
          query: this.store.searchKey
        }
      })
      .then((response) => {
        this.store.movieList = response.data.results,
        this.store.searchKey = "",
        console.log(this.store.movieList)
      })
      .catch((error) => {
        console.log(error);
        this.store.movieList = [];
      })
    }
},
}
</script>

<template>
  <headerComp></headerComp>
  <mainComp @findMovie="searchMovie"></mainComp>
</template>

<style lang="scss" scoped>
@use './assets/style/_partials/variables.scss' as *;

</style>
