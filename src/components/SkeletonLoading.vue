<template>
    <div class="skeleton-loader">
      <div class="skeleton large-skeleton"></div>
      <div class="small-news-grid">
        <div v-for="n in 4" :key="n" class="skeleton"></div>
      </div>
    </div>
    <div class="skeleton-loader">
        <div class="small-news-grid">
            <div v-for="n in 4" :key="n" class="skeleton"></div>
        </div>
        <div class="skeleton large-skeleton"></div>
    </div>
  </template>
  
<script>
    export default {
    name: "SkeletonLoader",
    };
</script>

<style scoped>
    .skeleton-loader {
        display: flex;
        gap: 20px;
        height: 500px;
        margin-bottom: 10px;
    }

    .skeleton {
        background-color: #e0e0e0;
        border-radius: 4px;
        animation: pulse 1.5s infinite ease-in-out;
    }


    .large-skeleton {
        flex: 1;
    }


    .small-news-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        flex: 1;
    }

    @keyframes pulse {
        0% {
            background-color: #e0e0e0;
        }
        50% {
            background-color: #f0f0f0;
        }
        100% {
            background-color: #e0e0e0;
        }
    }
</style>
  