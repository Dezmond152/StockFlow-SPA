import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // Твой работающий бэкенд
});

export default instance;