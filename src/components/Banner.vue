<template>
  <section class="container banner">
    <h1>Rotations Deli</h1>
    <p class="description">Unique deli with rotating specials in Marquette, MI</p>
    <p>Open Monday - Friday from 11am - 6pm</p>
    <p>113 S. 3rd Street, Marquette, MI 49855</p>
    <p>Call ahead: <a href="tel:906-273-0639">(906) 273-0639</a></p>

    <a class="btn btn-primary directions" href="https://www.google.com/maps/dir//%2746.5434423,-87.3951857%27" target="_blank">
      <i class="fa fa-location-arrow" aria-hidden="true"></i> Get directions
    </a>
    <img class="img-fluid" src="../assets/rotations-entry.jpg" alt="Rotations Deli" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {}
</script>

<style scoped lang="scss">
.banner {
  text-align: center;

  h1 {
    color: #61202b;
    font-size: 60px;
    margin-top: 60px;
    text-transform: uppercase;
  }

  .description {
    font-size: 20px;
  }

  .directions {
    font-size: 20px;
    margin: auto auto 30px;
    text-transform: uppercase;
  }
}
</style>
