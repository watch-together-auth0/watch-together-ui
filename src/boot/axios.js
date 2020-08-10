import Vue from 'vue';
import axios from 'axios';

axios.defaults.headers = {};
axios.defaults.headers['Content-type'] = 'application/json';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.baseURL = process.env.API_URL || 'https://hpdkek.deta.dev';

Vue.prototype.$axios = axios;
