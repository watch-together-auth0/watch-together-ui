<template>
  <q-page class="q-pa-xl">
    <div class="row q-px-md-xl">
      <SearchVideo />
    </div>

    <div class="row q-px-md-xl">
      <h5>Search Results</h5>
    </div>

    <div class="row q-px-md-xl">
      <div
        v-for="(video) in videos"
        :key="video.id"
        class="q-pa-sm q-mb-md col-xs-12 col-sm-6 col-md-3"
        >
        <VideoThumbnail :video="video" />
      </div>
    </div>

  </q-page>
</template>

<script>
import SearchVideo from 'components/SearchVideo.vue';
import VideoThumbnail from 'components/VideoThumbnail.vue';

export default {
  components: {
    SearchVideo,
    VideoThumbnail,
  },
  mounted() {
    this.search();
  },
  data() {
    return {
      videos: [
        'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
        'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
        'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
        'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
        'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
        'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
        'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYC5R6XVFCqh73cDAbbTszFAvfrw',
        'https://i.ytimg.com/vi/eOrNdBpGMv8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBFiFm2p4acvv5OVLI02zOUGAD4eQ',
      ].map((thumb_url) => ({ id: Math.random(), thumb_url, title: 'Avengers | Movie Trailer' })), // assign temporary id
    };
  },
  methods: {
    search() {
      // TODO: search
      // this.$axios.get('...', { q: this.$route.query.q}).then((response) => {
      //   this.videos = response.data // assuming data is array of video objects
      // })
      console.log(`searching for ${this.$route.query.q}`);
    },
  },
  watch: {
    $route() {
      this.search();
    },
  },
};
</script>
