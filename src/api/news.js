import axios from 'axios';

export const getNews = async (searchQuery) => {
    const API_KEY = '4555eb1b64cf42e9ada8692ce72d7cae';
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}&pageSize=10`);
    return response.data.articles;
};

