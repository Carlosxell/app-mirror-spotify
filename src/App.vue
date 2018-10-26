<template>
  <div id="app">
    <app-header msg="Home" />

    <div class="content">
      <div class="content_view">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/App-header.vue';

export default {
  name: 'header',
  components: {
    AppHeader,
  },
  mounted() {
    const TOKEN = {
      token: this.$route.hash.substring((this.$route.hash.indexOf('=') + 1), (this.$route.hash.indexOf('&'))),
      expires: 3600,
      type: 'Bearer ',
    };

    if (this.$route.hash && this.$route.hash.match(/#access_token=/)) {
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
      @include flexContainer(flex, null, null, center, center, center);
      @include calc(min-height, '100vh - #{pxToRem(120)}', null);
      margin: pxToRem(40) auto 0;
      max-width: pxToRem(768);
      padding: 0 pxToRem(12);
      text-align: center;
    }
  }
</style>
