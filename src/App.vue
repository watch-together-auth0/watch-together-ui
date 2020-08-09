<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue';
import router from './router';

// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';

console.log('Domain', domain, clientId);
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false;

export default {
  name: 'App',
};
</script>
