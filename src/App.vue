<template>
  <div id="app">
    <Header msg="Home" />

    <div class="content">
      <div class="content_view"></div>
      <router-view/>
    </div>
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
  @import './assets/css/_utilities/_imports';
  @import './assets/css/_base/_normalize';
  @import './assets/css/_base/_base';

  .content {
    @include calc(height, '100vh - #{pxToRem(60)}', null);

    &_view {
      margin: pxToRem(60) auto 0;
      max-width: pxToRem(768);
      padding: 0 pxToRem(12);
    }
  }
</style>
