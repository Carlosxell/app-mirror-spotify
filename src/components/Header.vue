<template>
  <header class="header">
    <nav class="header_nav">
      <ul class="header_menu">
        <li class="header_menu_item">
          <router-link class="header_link" to="/">{{ msg }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/_utilities/_imports';

  .header {
    background-color: rgba($color-dark, .5);
    color: $color-white;
    height: pxToRem(60);
    left: 0;
    max-width: 100vw;
    padding: 0 pxToRem(12);
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;

    &_nav {
      @include flexContainer(flex, null, null, null, center, center);
      height: pxToRem(60);
      max-width: pxToRem(768);
      margin: 0 auto;
    }

    &_menu {
      display: inline-block;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &_link {
      background-color: rgba($color-white, .8);
      color: $color-dark;
      cursor: pointer;
      display: inline-block;
      padding: pxToRem(8) pxToRem(12);
      text-decoration: none;

      &:visited, &:focus, &:hover {
        background-color: rgba($color-white, .6);
        text-decoration: none;
      }
    }
  }
</style>
