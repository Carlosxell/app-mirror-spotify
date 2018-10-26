<template>
  <div class="albums">
    <h2 class="title">Playlists</h2>

    <a class="boxAlbum"
       :href="item.external_urls.spotify"
       v-for="item in getPlaylists.items" :key="item.id" target="_blank">
      <div class="boxAlbum_content">
        <h4 class="boxAlbum_content_title">{{ item.name }}</h4>

        <h5 class="boxAlbum_content_subTitle">{{ item.tracks.total }} Músicas</h5>
      </div>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Playlists',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'getResults',
      'getAlbums',
      'getArtists',
      'getPlaylists',
      'getTracks',
    ]),
  },
};
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_imports';

  .title {
    border-bottom: pxToRem(1.8) solid $color-dark;
    display: inline-block;
    font-size: pxToRem(18);
    font-weight: 500;
    margin: pxToRem(32) 0;
    padding: pxToRem(8) 0;
  }

  .boxAlbum {
    border: pxToRem(1.6) solid $color-dark;
    border-radius: pxToRem(4);
    @include flexContainer(flex, null, null, null, center, null);
    margin-bottom: pxToRem(20);
    overflow: hidden;
    padding: pxToRem(10);
    text-align: left;
    text-decoration: none !important;

    &_content {
      width: 100%;

      &_title,
      &_subTitle {
        color: $color-dark;
        text-decoration: none;
      }

      &_title {
        font-size: pxToRem(18);
        font-weight: 400;
      }

      &_subTitle {
        font-size: pxToRem(14);
        font-weight: 300;
      }
    }
  }
</style>
