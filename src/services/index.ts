import axios from 'axios';

const api = axios.create({
  baseURL: 'https://themeshoes.commercesuite.com.br/web_api',
});

export default api;
