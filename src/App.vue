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
  }
}
</script>

<template>
  <headerComp></headerComp>
  <mainComp></mainComp>
</template>

<style lang="scss" scoped>
@use './assets/style/_partials/variables.scss' as *;

</style>
