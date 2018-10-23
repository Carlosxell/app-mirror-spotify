<template>
  <div class="albums">
    <h2 class="title">Artistas</h2>

    <div class="boxAlbum"
         v-for="item in getArtists.items" :key="item.id">
      <figure class="boxAlbum_wrap">
        <img :alt="item.name"
             class="boxAlbum_wrap_img"
             :src="item.images && item.images[0] ? item.images[0].url : 'https://via.placeholder.com/350x150'"
             :title="item.name" />
      </figure>

      <div class="boxAlbum_content">
        <h4 class="boxAlbum_content_title">{{ item.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Albums',
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
    border: pxToRem(1) solid $color-dark;
    border-radius: pxToRem(4);
    @include flexContainer(flex, null, null, space-between, center, center);
    max-height: pxToRem(124);
    margin-bottom: pxToRem(20);
    overflow: hidden;

    &_wrap {
      height: pxToRem(122);
      max-width: pxToRem(122);
      position: relative;

      &_img {
        max-width: 100%;
        width: 100%;

        @supports (object-fit: cover) {
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &_content {
      @include calc(width, '100% - #{pxToRem(124)}', null);
    }
  }
</style>
