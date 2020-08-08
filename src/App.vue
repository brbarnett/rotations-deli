<template>
  <div id="app">
    <Header />
    <Banner />
    <Menu />
    <Location />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Location from './components/Location.vue';
import Menu from './components/Menu.vue';

Component.registerHooks(['metaInfo']);
@Component({
  components: {
    Banner,
    Footer,
    Header,
    Location,
    Menu,
  },
})
export default class App extends Vue {
  /* eslint-disable lines-between-class-members */
  private description = 'Unique deli with rotating specials in Marquette, MI';
  /* eslint-disable global-require */
  private logo = `${window.location.protocol}//${window.location.host}${require('./assets/rotations-entry.jpg')}`;
  /* eslint-enable global-require */
  private title = 'Rotations Deli';
  /* eslint-enable lines-between-class-members */

  public metaInfo() {
    return {
      title: 'Rotations Deli',
      meta: [
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        // image must be an absolute path
        { name: 'twitter:image', content: this.logo },
        // Facebook OpenGraph
        { property: 'og:title', content: this.title },
        { property: 'og:site_name', content: this.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.logo },
        { property: 'og:description', content: this.description },
      ],
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
