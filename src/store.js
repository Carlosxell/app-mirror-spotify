import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    session: null,
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '59c332282f6c48d8a651556d0f72c8e3',
    redirectUri: window.location.origin,
    scopes: [
      'user-read-birthdate',
      'user-read-email',
      'user-read-private',
    ],
  },
  mutations: {
    ADD_SESSION(state, payload) {
      // eslint-disable-next-line
      state.session = payload;
    },
    CLEAR_SESSION(state) {
      // eslint-disable-next-line
      state.session = null;
    },
  },
  getters: {
    getSession: state => state.session,
    getEndPoint: state => state.authEndpoint,
    getClientId: state => state.clientId,
    getUri: state => state.redirectUri,
    getScopes: state => state.scopes,
  },
  actions: {
    addSession: (context, payload) => {
      context.commit('ADD_SESSION', payload);
    },
  },
});
