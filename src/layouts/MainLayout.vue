<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-white text-purple-wt">
        <img
          src="logo.png"
          style="width: 50px;"
          class="cursor-pointer"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-btn
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
        />
        <q-space />
        <q-btn
          unelevated
          color="purple"
          class="q-px-md text-weight-bold"
          no-caps
          label="Register"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
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
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
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
