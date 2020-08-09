import Vue from 'vue';
import router from 'src/router';
import { Auth0Plugin } from 'src/auth';
import { domain, clientId } from '../../auth_config.json';

console.log('Domain', domain, clientId);

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    console.log('appState', appState);
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});
