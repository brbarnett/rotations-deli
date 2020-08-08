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

@Component({
  components: {
    Banner,
    Footer,
    Header,
    Location,
    Menu,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
