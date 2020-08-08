<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-purple-wt">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="text-weight-medium">
          <!-- Quasar App -->
          <q-btn flat dense class="q-mr-sm" no-caps label="About Us" style="margin-left: 200px;"/>
        </q-toolbar-title>

        <div>
          <q-btn color="purple" label="Register" @click="showAlert()" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {
    };
  },
  methods: {
    showAlert() {
      window.alert('Hi');
    },
  },
};
</script>
