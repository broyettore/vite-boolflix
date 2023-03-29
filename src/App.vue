<script>
import axios from 'axios';
import { store } from './store';
import testComp from './components/testComp.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    testComp
  }
}

</script>

<template>
  <testComp></testComp>
</template>

<style lang="scss" scoped>
@use './assets/style/_partials/variables.scss' as *;

</style>
