<script>
import Home from './components/Home.vue';

export default {
  components: {
    Home
  },
  methods: {
    goToReadLater() {
      this.$router.push('/read-later');
    }
  }
};
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>

</style>

