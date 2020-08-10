<template>
<div class="row">
  <div class="col-10">
  <q-page class="q-pa-xl">
    <q-video
      style="min-height: 80vh;"
      :ratio="10/3"
      :src="videoSrc"
    />
  </q-page>
  </div>
  <div class="col-2">
  <Chat/>
  </div>
  </div>
</template>

<script>
import Chat from 'pages/Chat.vue';

export default {
  components: {
    Chat,
  },
  data() {
    return {
      videoSrc: `https://www.youtube.com/embed/${this.$route.params.id}`,
    };
  },
};
</script>
