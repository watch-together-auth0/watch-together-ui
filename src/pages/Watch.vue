<template>
  <q-page class="q-pa-xl">
    <q-video
      allowfullscreen
      style="min-width: 80vw; min-height: 80vh;"
      :ratio="10/3"
      :src="videoSrc"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: `https://www.youtube.com/embed/${this.$route.params.id}`,
    };
  },
};
</script>
