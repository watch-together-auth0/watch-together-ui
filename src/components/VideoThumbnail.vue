<template>
  <div :class="{ 'cursor-pointer': $auth.isAuthenticated }" @click="watch()">
    <q-img class="q-pa-sm" :src="videoDisplay.thumb_url" />
    <div class="q-mt-sm">
      <span v-html="videoDisplay.title"></span>
    </div>
  </div>
</template>

<script>
import formatVideo from 'src/services/Video/formatVideo';

export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  computed: {
    videoDisplay() {
      return formatVideo(this.video);
    },
  },
  methods: {
    watch() {
      if (this.$auth.isAuthenticated) {
        this.$q.localStorage.set('wt_watch');
        this.$router.push({ name: 'watch', params: { id: this.videoDisplay.id } });
      }
    },
  },
};
</script>

<style>

</style>
