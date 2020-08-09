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
        v-for="(video, index) in videos"
        :key="index"
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
      videos: [],
    };
  },
  methods: {
    async search() {
      const { data } = await this.$yt.search(this.$route.query.q);
      const { items: videos } = data;
      this.videos = videos;
    },
  },
  watch: {
    $route() {
      this.search();
    },
  },
};
</script>
