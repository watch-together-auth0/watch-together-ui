<template>
  <q-page class="q-pa-xl">
    <div class="row q-px-md-xl">
      <SearchVideo />
    </div>

    <div class="row q-px-md-xl">
      <h5>Recommended Videos</h5>
    </div>

    <div class="row q-px-md-xl">
      <div
        v-for="(video, index) in recommendedVideos"
        :key="index"
        class="q-pa-sm q-mb-md col-xs-12 col-sm-6 col-md-3">
        <VideoThumbnail :video="video" />
      </div>
    </div>

    <div class="row q-px-md-xl">
      <h5>Popular Videos</h5>
    </div>

    <div class="row q-px-md-xl">
      <div
        v-for="(video, index) in popularVideos"
        :key="index"
        class="q-pa-sm q-mb-md col-xs-12 col-sm-6 col-md-3">
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
  data() {
    return {
      recommendedVideos: [],
      popularVideos: [],
    };
  },
  methods: {
    async getRecommendedVideos() {
      const { data } = await this.$yt.search('News today');
      const { items: videos } = data;
      this.recommendedVideos = videos;
    },
    async getPopularVideos() {
      const { data } = await this.$yt.search('Popular Videos Today');
      const { items: videos } = data;
      this.popularVideos = videos;
    },
  },
  mounted() {
    this.getRecommendedVideos();
    this.getPopularVideos();
  },
};
</script>
