<template>
  <div class="resultList">
    <h2 class="title">Encontramos com o termo buscado:</h2>

    <div class="resultList_content">
      <router-link class="resultList_content_box"
                   to="/albums"
                   v-if="getAlbums">{{ getAlbums.items.length || '0' }} Álbuns</router-link>
      <router-link class="resultList_content_box"
                   to="/artists"
                   v-if="getArtists">{{ getArtists.items.length || '0' }} Artistas</router-link>
      <router-link class="resultList_content_box"
                   to="/playlists"
                   v-if="getPlaylists">{{ getPlaylists.items.length || '0' }} Playlist</router-link>
      <router-link class="resultList_content_box"
                   to="/musics"
                   v-if="getTracks">{{ getTracks.items.length || '0' }} Músicas</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ResultList',
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

  .resultList {
    &_content {
      @include flexContainer(flex, null, null, space-between, center, center);

      &_box {
        background-color: darken($color-lightBlue, 15%);
        color: $color-white;
        @include calc(max-width, '25% - #{pxToRem(8)}', null);
        font-weight: 400;
        @include flexItens(null, null, 1 1 auto);
        min-height: pxToRem(44);
        padding: pxToRem(4) pxToRem(8);
        transition: background-color .15s ease-in-out;
        text-decoration: none;

        &:hover {
          background-color: darken($color-lightBlue, 25%);
          text-decoration: none;
        }
      }
    }
  }
</style>
