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
      const promise1 = axios.get(this.store.endpoints.movie, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchKey
        }
      });
      const promise2 = axios.get(this.store.endpoints.series, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchKey
        }
      });
      Promise.all([promise1, promise2])
      .then((response) => {
        // const finalResponse = Object.assign(response[0].data, response[1].data)
        const finalResponse = response[0].data.results.concat(response[1].data.results);
        this.store.resultList = finalResponse,
        this.store.searchKey = "",
        console.log(finalResponse)
      })
      .catch((error) => {
        console.log(error);
        this.store.resultList = [];
      });
    },
  },
  created() {
        axios.get(this.store.endpoints.MultiSearch, {
         params: {
          api_key: this.store.apiKey,
          query: "a"
       }
      })
      .then((response) => {
        this.store.resultList = response.data.results,
        this.store.searchKey = "",
        console.log(this.store.resultList)
      })
      .catch((error) => {
        console.log(error);
        this.store.resultList = [];
      });
    }
}
</script>

<template>
  <headerComp @filterResult="searchMovie"></headerComp>
  <mainComp></mainComp>
</template>

<style lang="scss" scoped>
@use './assets/style/_partials/variables.scss' as *;

</style>


