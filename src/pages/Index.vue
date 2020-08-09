<template>
  <q-page class="">
    <div class="row">
      <div class="col">
        <q-img basic src="landing-cover-photo.png">
        </q-img>
      </div>
    </div>

    <div class="row justify-center text-center">
      <h3 class = "text-purple-wt text-weight-bold">Enjoy YouTube, Vimeo videos and more with your family</h3>
    </div>

    <div class="row q-px-md-xl justify-center text-purple-header ">
      <h5 class="text-weight-bold">Popular Videos</h5>
    </div>

    <div class="row q-px-md-xl">
      <div
        v-for="(video) in popularVideos"
        :key="video.id"
        class="q-pa-sm q-mb-md col-xs-12 col-sm-6 col-md-3">
        <VideoThumbnail :video="video" />
      </div>
    </div>

  </q-page>
</template>

<script>
import VideoThumbnail from 'components/VideoThumbnail.vue';

export default {
  name: 'PageIndex',
  components: {
    VideoThumbnail,
  },
  data() {
    return {
      popularVideos: [
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
};
</script>
