<template>
<div >
    <div class="row">
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
        <div v-for="(msg) in chats"
             :key="msg.id">
            <q-chat-message
            v-if="msg.type === 'info'"
            :label="msg.text"
            />
            <q-chat-message
                v-if="msg.type !== 'info'"
                :name="msg.name"
                :text="msg.text"
                :sent="msg.sent"
                :stamp="msg.time"
            />
      </div>
    </div>
  </div>
    </div>
    <div class="row">

      <q-input bottom-slots v-model="text" label="Chat" :dense="dense">
        <template v-slot:before>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar> -->
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close"  class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn @click="sendMessage" round dense flat icon="send" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
// import VideoThumbnail from 'components/VideoThumbnail.vue';
// const endPoint = 'https://shrouded-ravine-42691.herokuapp.com/';
const endPoint = 'http://localhost:5000';

const socket = io.connect(`${endPoint}`);

export default {
  components: {
    // SearchVideo,
    // VideoThumbnail,
  },
  mounted() {
    this.search();
    socket.on('connect', () => socket.emit('join', { room: 'room237', username: this.$auth.user !== null ? this.$auth.user.name : 'Guest User' }));
    socket.on('message', msg => {
      this.chats.push({
        id: Math.random(), text: [msg.text], name: msg.user, type: msg.type, sent: false, time: new Date().toLocaleTimeString('en-US'),
      });
    });
  },
  data() {
    return {
      chats: [
      ],
      userVideo: [],
      text: '',
      ph: '',
      dense: true,
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
    sendMessage() {
      socket.emit('message', {
        room: 'room237', username: this.$auth.user !== null ? this.$auth.user.name : 'Guest User', message: this.text,
      });
      this.chats.push({
        id: Math.random(),
        name: 'me',
        text: [this.text],
        sent: true,
        time: new Date().toLocaleTimeString('en-US'),
      });
    },
  },
  watch: {
    $route() {
      this.search();
    },
  },
};
</script>
