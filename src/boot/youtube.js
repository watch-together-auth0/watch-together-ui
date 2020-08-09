import Vue from 'vue';
import axios from 'axios';

class Yt {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.YOUTUBE_API_KEY,
      },
    });
  }

  search(q) {
    return this.axios.get('/search', { params: { q } });
  }
}

Vue.prototype.$yt = new Yt();
