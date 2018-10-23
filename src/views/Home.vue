<template>
  <div class="home">
    <form autocomplete="off"
          class="form"
          name="formSearchSpotify"
          @submit.prevent="searchGeneral"
          v-if="getSession !== null">
      <label class="formGroup_label" for="search"> O que você procura ?</label>
      <div class="formGroup">
        <input class="formGroup_input"
               @change="setSearch"
               id="search"
               name="searchTerm"
               type="text"
               v-model="searchTerm" />
        <button class="btn_form" type="submit">Buscar</button>
      </div>
    </form>

    <ResultList v-if="getResults" />

    <button class="btn"
            @click="loginToApp"
            v-if="getSession === null"
            type="button">Efetuar login no serviço do spotify</button>
  </div>
</template>

<script>
import ResultList from '@/components/ResultList.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  components: { ResultList },
  name: 'home',
  data() {
    return {
      searchTerm: '',
    };
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
        window.location = `${this.getEndPoint}?client_id=${this.getClientId}&redirect_uri=${this.getUri}&scope=user-read-email%20user-read-private&response_type=token`;
      }
    },
    searchGeneral() {
      // eslint-disable-next-line
      axios.defaults.headers.common['Authorization'] = this.getSession.type + this.getSession.token;

      axios.get('https://api.spotify.com/v1/search', {
        params: {
          type: 'album,track,artist,playlist',
          q: this.searchTerm.replace(' ', '+'),
        },
      }).then((res) => {
        this.$store.dispatch('addSearchResult', res.data);
      }, error => console.info(error, 'Deu merda'));
    },
    setSearch() {
      this.$store.dispatch('setSearch', this.searchTerm);
    },
  },
  computed: {
    ...mapGetters([
      'getResults',
      'getUri',
      'getSession',
      'getClientId',
      'getEndPoint',
    ]),
  },
  mounted() {
    this.searchTerm = this.$store.getters.getSearch;
  },
};
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_imports';

  .form {
    text-align: left;
  }

  .formGroup {
    width: 100%;

    &_label {
      display: inline-block;
      font-weight: 500;
      font-size: pxToRem(14);
      padding: pxToRem(8) 0;
    }

    &_input {
      border: pxToRem(1.4) solid rgba($color-dark, .8);
      border-radius: pxToRem(4);
      @include calc(width, '100% - #{pxToRem(108)}', null);
      outline: none;
      padding: pxToRem(6) pxToRem(12);
      transition: border-color .15s linear;
      text-align: left;

      &:focus {
        border-color: $color-blue;
        outline: none;
      }
    }
  }

  .btn {
    border: none;
    border-radius: pxToRem(4);
    display: inline-block;
    font-weight: 500;
    font-size: pxToRem(14);
    padding: pxToRem(8) pxToRem(12);
    transition: background-color .15s ease-in-out;

    &:hover {
      background-color: rgba($color-dark, .2);
    }

    &_form {
      @extend .btn;
      margin-left: pxToRem(4);
      width: pxToRem(100);
    }
  }
</style>
