import axios from 'axios';

const api = axios.create({baseUrl: 'http://rickandmortyapi.com/api/'}); 

export default api;