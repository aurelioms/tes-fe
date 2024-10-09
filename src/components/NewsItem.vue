<template>
    <div :class="['news-container', layoutClass]">
      <div class="small-news-grid">
        <div
          v-for="smallArticle in smallArticles"
          :key="smallArticle.url"
          class="small-news-item"
          @click="onArticleClick(smallArticle)"
        >
          <img :src="smallArticle.urlToImage" alt="News Image" v-if="smallArticle.urlToImage" />
          <h1>{{ smallArticle.title }}</h1>
        </div>
      </div>
  
      <div class="large-news-item" @click="onArticleClick(article)">
        <img :src="article.urlToImage" alt="News Image" v-if="article.urlToImage" />
        <div class="text">
            <h1>{{ article.title }}</h1>
            <p>Name: {{ article.content }}</p>
            <p>Author: {{ article.author }}</p>
            <p>Desc: {{ article.description }}</p>
            <p>Published: {{ article.publishedAt }}</p>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
name: "NewsItem",
props: {
    article: Object,
    smallArticles: Array,
    isReverseLayout: {
    type: Boolean,
    default: false,
    },
},
computed: {
    layoutClass() {
    return this.isReverseLayout ? 'reverse-layout' : '';
    },
},
methods: {
    onArticleClick(article) {
        this.saveReadLater(article);
        window.open(article.url, '_blank');
    },
    saveReadLater(article) {
    let readLater = JSON.parse(localStorage.getItem('readLater')) || [];
    if (!readLater.find(a => a.url === article.url)) {
        readLater.push({
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage
        });
        localStorage.setItem('readLater', JSON.stringify(readLater));
    }
    }
}
};
</script>
  
<style scoped>
.news-container {
    display: flex;
    margin-bottom: 10px;
    height: 500px;
}

.large-news-item,
.small-news-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.large-news-item {
    position: relative;
    flex: 1;
    border: 1px solid #ddd;
    padding: 20px;
    transition: background-color 0.3s;
}

.large-news-item:hover {
    background-color: #f0f0f0;
}

.large-news-item img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
}

.large-news-item text {
    position: relative;
    top: 0;
    left: 0;
}

.large-news-item h1 { 
    position: relative;
    color: white;
    text-shadow: 2px 2px red;
}

.large-news-item p {
    position: relative;
    color: white;
    text-shadow: 2px 2px red;
}

.small-news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    flex: 1;
    align-items: stretch; 
}

.small-news-item {
    position: relative;
    border: 1px solid #ddd;
    padding: 10px;
    transition: background-color 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.small-news-item:hover {
    background-color: #f0f0f0;
}

.small-news-item img {
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    object-fit: cover;  
}

.small-news-item h1 {
    position: relative; 
    font-size: 20px;
    margin: 0;
    flex-grow: 1; 
    color: white; 
    text-shadow: 2px 2px black;
}

.reverse-layout {
    flex-direction: row-reverse;
}

.reverse-layout .small-news-grid {
    order: 1; 
}

.reverse-layout .large-news-item {
    order: 2;
}
</style>
  