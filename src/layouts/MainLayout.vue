<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-white text-purple-wt">
        <router-link :to="{ name: 'index' }">
          <img
            src="logo.png"
            style="width: 50px;"
            class="cursor-pointer"
          />
        </router-link>

        <!-- <q-btn
          flat
          stretch
          class="q-px-md text-weight-bold"
          no-caps
          label="About Us"
          style="margin-left: 200px;"
        />
        <q-btn
          flat
          stretch
          class="q-px-md text-weight-bold"
          no-caps
          label="Help"
        /> -->
        <q-space />
        <router-link :to="{ name: 'home' }">
          <q-avatar v-if="$auth.isAuthenticated" class="q-mr-xs-sm q-mr-sm-none">
            <img :src="user.picture">
          </q-avatar>
        </router-link>
        <q-btn
          v-if="$auth.isAuthenticated"
          unelevated
          flat
          dense
          color="white"
          text-color="black"
          class="q-px-md text-weight-bold gt-xs"
          no-caps
          stretch
          :label="user.name"
          to="/home"
        />
        <q-btn
          v-if="!$auth.isAuthenticated"
          unelevated
          color="purple"
          class="q-px-md text-weight-bold"
          no-caps
          label="Log in"
          @click="login"
        />
        <q-btn
          v-else
          unelevated
          color="purple"
          class="text-weight-bold"
          no-caps
          label="Log out"
          style="min-width: 100px;"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$route.name !== 'index'"
      show-if-above
      v-model="leftOpen"
      side="left"
      bordered
      :mini="leftMini"
      :width="250"
      :breakpoint="500"
      >
      <!-- drawer content -->
      <Sidebar
        class="q-mt-md"
        v-model="leftActive"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer class="bg-grey-8 text-white">
      <q-toolbar class="align-center">
        <template v-for="(link, index) in footerLinks">
          <q-btn
            :key="index"
            flat
            stretch
            class="col"
            no-caps
            :label="link"
          />
        </template>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import Sidebar from 'components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  mounted() {
    this.$root.$on('toggleSideBar', () => {
      this.leftActive = !this.leftActive;
      this.$root.$emit('leftActiveChanged', this.leftActive);
    });
  },
  computed: {
    leftMini() {
      return !this.leftActive;
    },
    leftOpen: {
      get() {
        return this.$q.platform.is.mobile ? this.leftActive : true;
      },
      set(open) {
        this.leftActive = open;
      },
    },
    user() {
      return this.$auth.user || {};
    },
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  data() {
    return {
      leftActive: this.$q.platform.is.desktop,
      footerLinks: [
        'Site map',
        'Privacy',
        'Terms',
        'Join Us',
      ],
    };
  },
};
</script>
