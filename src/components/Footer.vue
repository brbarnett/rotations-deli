<template>
  <div class="container">
    <footer class="border-top">
      <p>&copy; {{ new Date().getFullYear() }} Rotations Deli</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
footer {
  font-size: 16px;
  text-align: center;

  > p {
    margin: 20px auto;
  }
}
</style>
