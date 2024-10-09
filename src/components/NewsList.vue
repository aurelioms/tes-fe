<template>
    <div>
        <input v-model="search" @input="fetchNews" placeholder="Search news..." class="news-search-input" />
        <div v-if="loading">
            <SkeletonLoading />
        </div>
        <div v-else>
            <div v-for="(group, index) in firstGroupedArticles" :key="index">
                <NewsItem
                    v-if="group.length > 0"
                    :article="group[0]"
                    :small-articles="group.slice(1, 5)"
                    :isReverseLayout="true"
                />
            </div>

            <div v-for="(group, index) in secondGroupedArticles" :key="index">
                <NewsItem
                    v-if="group.length > 0"
                    :article="group[0]"
                    :small-articles="group.slice(1, 5)"
                    :isReverseLayout="false"
                />
            </div>
        </div>
    </div>
</template>
  
<script>
    import { ref, computed } from 'vue';
    import { getNews } from '../api/news.js';
    import NewsItem from './NewsItem.vue';
    import SkeletonLoading from './SkeletonLoading.vue';

    export default {
        components: { NewsItem, SkeletonLoading },
        setup() {
            const search = ref('');
            const articles = ref([]);
            const loading = ref(false);

            const fetchNews = async () => {
                if (!search.value) {
                    loading.value = false
                    return;
                }
                loading.value = true;
                await new Promise(resolve => setTimeout(resolve, 2000));
                articles.value = await getNews(search.value);
                console.log(articles.value)
                loading.value = false;
            };

            const firstGroupedArticles = computed(() => {
                const groups = [];
                for (let i = 0; i < Math.min(articles.value.length, 5); i += 5) {
                    groups.push(articles.value.slice(i, i + 5));
                }
                return groups;
            });

            const secondGroupedArticles = computed(() => {
                const groups = [];
                for (let i = 5; i < Math.min(articles.value.length, 10); i += 5) {
                    groups.push(articles.value.slice(i, i + 5));
                }
                return groups;
            });

            return { search, articles, fetchNews, loading, firstGroupedArticles, secondGroupedArticles };
        },
    };
</script>


<style scoped>
    .news-search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .news-search-input {
        width: 100%;
        max-width: 500px;
        padding: 10px 15px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 16px;
        margin-bottom: 20px;
        transition: all 0.3s ease;
    }

    .news-search-input::placeholder {
        color: #888;
    }

    .news-search-input:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }
</style>