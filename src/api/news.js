import axios from 'axios';

export const getNews = async (searchQuery) => {
    const API_KEY = 'YOUR_API_KEY';
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}&pageSize=10`);
    return response.data.articles;
};

