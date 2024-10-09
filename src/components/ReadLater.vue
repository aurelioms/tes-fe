<template>
    <div class="read-later-container">
        <h3>Read Later</h3>
        <div class="articles-grid">
            <div 
            class="article-card" 
            v-for="article in readLaterArticles" 
            :key="article.url"
            >
            <img :src="article.urlToImage" alt="news image" class="article-image" />
            <h4>{{ article.title }}</h4>
            <a :href="article.url" target="_blank">Read more</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.read-later-container {
  padding: 20px;
}

.articles-grid {
  display: grid;
  grid-template-columns: auto auto auto auto; 
  gap: 20px;
}

.article-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 300px; 
  padding: 10px; 
  background-color: #fff; 
  transition: box-shadow 0.3s; 
}

.article-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.article-image {
  width: 100%;
  height: 150px; 
  object-fit: cover; 
}

.article-card h4 {
  margin: 10px 0; 
  flex-grow: 1; 
}

.article-card a {
  text-align: center;
  color: #007bff; 
  text-decoration: none; 
}
</style>
  

<script>
import { ref } from 'vue';

export default {
  setup() {
    const readLaterArticles = ref(JSON.parse(localStorage.getItem('readLater')) || []);

    return { readLaterArticles };
  },
};
</script>
