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
        <q-btn
          unelevated
          color="purple"
          class="q-px-md text-weight-bold"
          no-caps
          label="Sign In"
          @click="login"
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
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
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
