<template>
  <div class="container">
    <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">Rotations Deli</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <!-- empty -->
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.google.com/maps/dir//%2746.5434423,-87.3951857%27"
              target="_blank"
            >
              <i class="fa fa-location-arrow" aria-hidden="true"></i> Get Directions
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tel:906-273-0639">
              <i class="fa fa-mobile" aria-hidden="true"></i> Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.container {
  height: 56px;
}
</style>
