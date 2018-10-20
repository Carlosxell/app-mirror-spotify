<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button class="btn"
              @click="loginToApp"
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import axios from 'axios';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      token: this.$route.params.access_token,
      authEndpoint: 'https://accounts.spotify.com/authorize',
      clientId: '59c332282f6c48d8a651556d0f72c8e3',
      redirectUri: window.location.href,
      scopes: [
        'user-read-birthdate',
        'user-read-email',
        'user-read-private',
      ],
    };
  },
  methods: {
    loginToApp() {
      console.info(this.redirectUri, 'URL');
      if (this.$route.hash && this.$route.hash.match(/#access_token=/)) {
        console.info(this.redirectUri, 'URL');
        console.info(this.$route, 'route');
      } else {
        window.location = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join('%20')}&response_type=token`;
      }
    },
  },
  mounted() {},
};
</script>
