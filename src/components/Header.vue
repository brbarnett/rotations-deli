<template>
  <div class="header">
    <div class="container fixed-top">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="../assets/rotations-logo.png" /> Rotations Deli
        </a>

        <ul class="navbar-nav mr-auto">
          <!-- empty -->
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="btn btn-secondary mx-2 d-none d-sm-block"
              href="https://www.google.com/maps/dir//%2746.5434423,-87.3951857%27"
              target="_blank"
            >
              <i class="fa fa-location-arrow" aria-hidden="true"></i> Get Directions
            </a>
          </li>
          <li class="nav-item">
            <a class="btn btn-primary text-nowrap" href="tel:906-273-0639">
              <i class="fa fa-mobile" aria-hidden="true"></i> Call Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  height: 56px;
  margin-bottom: 56px;
}
.navbar-brand {
  height: 56px;
  margin: -8px 0 -8px 0;
  padding: 0;

  > img {
    height: 100%;
  }
}
</style>
