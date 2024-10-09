<script>
import NewsList from './NewsList.vue';
import ReadLater from './ReadLater.vue';

export default {
  components: {
    NewsList, ReadLater
  },
  methods: {
    goToReadLater() {
      this.$router.push('/read-later');
    }
  }
};
</script>

<template>
  <div>
    <div class="header-container">
      <h1>News Search</h1>
      <router-link to="/read-later">
        <button class="read-later-button">Read Later</button>
      </router-link>
    </div>
    <NewsList />
  </div>
</template>

<style>

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.read-later-button {
  padding: 10px 15px;
  border: none; 
  border-radius: 5px; 
  background-color: #007bff; 
  color: white; 
  cursor: pointer; 
  transition: background-color 0.3s;
}

.read-later-button:hover {
  background-color: #0056b3; 
}
</style>

