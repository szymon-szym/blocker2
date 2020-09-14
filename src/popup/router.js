import MainView from '@/components/MainView.vue'
import Vue from 'vue'
import Auth from '@okta/okta-vue'
import VueRouter from 'vue-router'
 
Vue.use(Auth, {
  issuer: 'https://dev-333233.okta.com/oauth2/default',
  clientId: '0oa5bmaa0ijloZhuW357',
  redirectUri: 'https://ioepolmibkjplofldcaboodhoehjpoba.chromiumapp.org/implicit/callback',
  scopes: ['openid', 'profile', 'email']
})

const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/implicit/callback', component: Auth.handleCallback() },
      {
        path: '/',
        component: MainView,
        // meta: {
        //   requiresAuth: true
        // }
     },
     {
        path: '/auth',
        component: MainView,
        meta: {
          requiresAuth: true
        }
     }
    ]
  })
  router.beforeEach(Vue.prototype.$auth.authRedirectGuard())
  export default router