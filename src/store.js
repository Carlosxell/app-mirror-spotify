import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    session: null,
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '59c332282f6c48d8a651556d0f72c8e3',
    redirectUri: window.location.origin,
    search: '',
    searchResult: null,
  },
  mutations: {
    ADD_SESSION(state, payload) {
      // eslint-disable-next-line
      state.session = payload;
    },
    ADD_SEARCH_RESULT(state, payload) {
      // eslint-disable-next-line
      state.searchResult = payload;
    },
    CLEAR_SESSION(state) {
      // eslint-disable-next-line
      state.session = null;
    },
    SET_SEARCH(state, payload) {
      // eslint-disable-next-line
      state.search = payload;
    },
  },
  getters: {
    getSearch: state => state.search,
    getSession: state => state.session,
    getEndPoint: state => state.authEndpoint,
    getClientId: state => state.clientId,
    getUri: state => state.redirectUri,
    getResults: state => state.searchResult,
    // eslint-disable-next-line
    getAlbums: state => state.searchResult ? state.searchResult.albums : null,
    // eslint-disable-next-line
    getArtists: state => state.searchResult ?  state.searchResult.artists : null,
    // eslint-disable-next-line
    getPlaylists: state => state.searchResult ? state.searchResult.playlists : null,
    // eslint-disable-next-line
    getTracks: state => state.searchResult ? state.searchResult.tracks : null,
  },
  actions: {
    addSession: (context, payload) => {
      context.commit('ADD_SESSION', payload);
    },
    addSearchResult: (context, payload) => {
      context.commit('ADD_SEARCH_RESULT', payload);
    },
    setSearch: (context, payload) => {
      context.commit('SET_SEARCH', payload);
    },
  },
});
