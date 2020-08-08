<template>
  <div class="cursor-pointer" @click="watch()">
    <q-img class="q-pa-sm" :src="video.thumb_url" />
    <div class="q-mt-sm">
      {{ video.title }}
    </div>
  </div>
</template>

<script>
/**
 * This expects a video prop
 * {
 *   id: '',
 *   title: '',
 *   thumb_url: '',
 * }
 */
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  methods: {
    watch() {
      this.$router.push({ name: 'watch', params: { id: this.video.id } });
    },
  },
};
</script>

<style>

</style>
