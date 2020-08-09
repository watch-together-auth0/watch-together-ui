<template>
<div>
  <q-list>
    <q-item clickable v-ripple @click="$root.$emit('toggleSideBar')">
      <q-item-section></q-item-section>
      <q-item-section avatar>
        <q-icon color="primary" :name="$q.platform.is.mobile ? 'chevron_left' : (leftActive ? 'chevron_left' : 'chevron_right')" />
      </q-item-section>
    </q-item>
    <q-expansion-item
      default-opened
      icon="people_outline"
      label="Online">
      <q-list>
        <q-separator />
        <q-item v-for="user in onlineUsers" :key="user.id" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            {{ user.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </q-list>
  <q-separator />
  <q-list>
    <q-item>
      <q-item-section avatar>
        <q-icon name="video_library" />
      </q-item-section>
      <q-item-section>Video Channels</q-item-section>
    </q-item>
    <q-separator />
    <template v-if="leftOpen">
    <q-item v-for="channel in videoChannels" :key="channel.id" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="play_arrow" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ channel.name }}</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-btn dense flat icon="add_box" @click.stop="addUser()" />
      </q-item-section>
    </q-item>
    </template>
  </q-list>

  <AddUsersInVideoChannelDialog v-model="addUsersInVideoChannelDialog" />
</div>
</template>

<script>
import AddUsersInVideoChannelDialog from 'components/AddUsersInVideoChannelDialog.vue';

export default {
  components: {
    AddUsersInVideoChannelDialog,
  },
  mounted() {
    this.$root.$on('leftActiveChanged', (bool) => {
      this.leftActive = bool;
    });
  },
  computed: {
    leftOpen: {
      get() {
        return this.$q.platform.is.mobile ? true : this.leftActive;
      },
      set(open) {
        this.leftActive = open;
      },
    },
  },
  data() {
    return {
      leftActive: this.$q.platform.is.desktop,
      addUsersInVideoChannelDialog: false,
      onlineUsers: [
        {
          id: 1,
          name: 'Uncle Sam',
          photo_url: '',
        }, {
          id: 2,
          name: 'Uncle Drew',
          photo_url: '',
        }, {
          id: 3,
          name: 'Uncle Ben',
          photo_url: '',
        },
      ],
      videoChannels: [
        {
          id: 1,
          name: 'Family Guy',
        }, {
          id: 2,
          name: 'National Geographic',
        }, {
          id: 3,
          name: 'Classic',
        },
      ],
    };
  },
  methods: {
    addUser() {
      this.addUsersInVideoChannelDialog = true;
    },
  },
};
</script>
