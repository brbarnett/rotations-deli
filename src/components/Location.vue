<template>
  <section class="container">
    <h2>Location</h2>

    <iframe
      id="map"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAcY9eSFOl85dNDg6BrYv82vV5tzOx0lms&q=113+S.+3rd+Street,+Marquette,+MI+49855"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import './section.scss';

@Component
export default class Location extends Vue {}
</script>

<style scoped lang="scss">
#map {
  height: 400px;
  margin-bottom: 40px;
  width: 100%;
}
</style>
