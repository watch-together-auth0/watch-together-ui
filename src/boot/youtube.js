import Vue from 'vue';
import axios from 'axios';

class Yt {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        part: 'snippet',
        maxResults: 16,
        key: process.env.YOUTUBE_API_KEY,
      },
    });
  }

  search(q, params = {}) {
    return this.axios.get('/search', { params: { q, ...params } });
  }
}

Vue.prototype.$yt = new Yt();
