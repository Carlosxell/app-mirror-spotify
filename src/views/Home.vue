<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button class="btn"
              @click="loginToApp"
              v-if="getSession === null"
              type="button">Efetuar login no serviço do spotify</button>
    </div>
  </div>
</template>

<style lang="scss">
  .btn {
    border: none;
    display: inline-block;
    padding: 8px 12px;
  }
</style>

<script>
import { mapGetters } from 'vuex';
// import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {};
  },
  methods: {
    loginToApp() {
      const TOKEN = {
        token: this.$route.hash.substring((this.$route.hash.indexOf('=') + 1), (this.$route.hash.indexOf('&'))),
        expires: 3600,
        type: 'Bearer ',
      };

      if (this.$route.hash && this.$route.hash.match(/#access_token=/)) {
        this.$store.dispatch('addSession', TOKEN);
      } else {
        window.location = `${this.getEndPoint}?client_id=${this.getClientId}&redirect_uri=${this.getUri}&scope=${this.getScopes.join('%20')}&response_type=token`;
      }
    },
  },
  computed: {
    ...mapGetters([
      'getUri',
      'getSession',
      'getScopes',
      'getClientId',
      'getEndPoint',
    ]),
  },
};
</script>
