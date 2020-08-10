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

  fallbackVideos() {
    const items = [
      {
        id: '6ZfuNTqbHE8',
        kind: 'youtube#video',
        etag: '"UCBpFjp2h75_b92t44sqraUcyu0/iYynQR8AtacsFUwWmrVaw4Smb_Q"',
        snippet: {
          publishedAt: '2012-06-20T22:45:24.000Z',
          channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
          title: 'Marvel Studios\' Avengers: Infinity War Official Trailer',
          description: 'Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
            },
            medium: {
              url: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
            },
            high: {
              url: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
            },
          },
          categoryId: '28',
        },
      },
      {
        id: 'eOrNdBpGMv8',
        kind: 'youtube#video',
        etag: '"UCBpFjp2h75_b92t44sqraUcyu0/iYynQR8AtacsFUwWmrVaw4Smb_Q"',
        snippet: {
          publishedAt: '2012-06-20T22:45:24.000Z',
          channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
          title: 'Marvel\'s The Avengers- Trailer(OFFICIAL)',
          description: 'Antonio Fuentes speaks to us and takes questions on working with Google APIs and OAuth 2.0.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
            },
            medium: {
              url: 'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
            },
            high: {
              url: 'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
            },
          },
          categoryId: '28',
        },
      },
    ];
    for (let index = 0; index < 7; index += 1) {
      items.push(items[0]);
      items.push(items[1]);
    }
    return Promise.resolve({
      data: {
        items,
      },
    });
  }

  async search(q, params = {}) {
    try {
      return await this.axios.get('/search', { params: { q, ...params } });
    } catch (e) {
      console.log('Yt -> search -> e', e.response);
      return this.fallbackVideos();
    }
  }
}

Vue.prototype.$yt = new Yt();
