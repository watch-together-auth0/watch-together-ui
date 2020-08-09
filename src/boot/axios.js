import Vue from 'vue';
import axios from 'axios';

axios.defaults.headers = {};
axios.defaults.headers['Content-type'] = 'application/json';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.baseURL = process.env.API_URL;
console.log('process.env.API_URL', process.env.API_URL);

Vue.prototype.$axios = axios;
