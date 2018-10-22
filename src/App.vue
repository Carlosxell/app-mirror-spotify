<template>
  <div id="app">
    <Header msg="Teste" />
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'header',
  components: {
    Header,
  },
  mounted() {
    const TOKEN = {
      token: this.$route.hash.substring((this.$route.hash.indexOf('=') + 1), (this.$route.hash.indexOf('&'))),
      expires: 3600,
      type: 'Bearer ',
    };

    if (this.$route.hash && this.$route.hash.match(/#access_token=/)) {
      console.info(TOKEN, 'token');
      this.$store.dispatch('addSession', TOKEN);
    }
  },
};
</script>

<style lang="scss">
  #app {
    font-family: -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Oxygen,
                Ubuntu,
                Cantarell,
                "Open Sans",
                "Helvetica Neue",
                sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
