// https://auth0.com/docs/quickstart/spa/vuejs/01-login#configure-callback-urls
import { Auth0Plugin } from 'src/auth';

const domain = process.env.AUTH0_DOMAIN || 'team-connect.us.auth0.com';
const clientId = process.env.AUTH0_CLIENT_ID || 'QtEx6AVEwysKGu7Qe243DQqorX6RfKyc';

console.log('Domain', domain, clientId);

export default async ({ Vue, router }) => {
  // Install the authentication plugin here
  Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: (/* appState */) => {
      // router.push(
      //   appState && appState.targetUrl
      //     ? appState.targetUrl
      //     : window.location.pathname,
      // );
      router.replace('/home');
    },
  });
};
