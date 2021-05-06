<template>
  <section class="container">
    <h2>Menu</h2>

    <div class="row">
      <div
        v-for="item in menuItems"
        :key="item.name"
        class="col-md-6 col-lg-4 menu-item"
      >
        <div class="card">
          <img
            v-bind:src="item.image"
            class="card-img-top"
            v-bind:alt="item.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p>{{ item.price | currency }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import './section.scss';

interface MenuItem {
  description: string;
  image: string;
  name: string;
  price: number | undefined;
}

@Component
export default class Menu extends Vue {
  /* eslint-disable global-require */
  private menuItems: MenuItem[] = [
    {
      description:
        'Cheese Steak: Ribeye, Caramelized onions, with your choice of Cheez-Whiz® or Provolone cheese, on a Hoagie roll.',
      image: require('../assets/menu/dave.jpg'),
      name: 'The Dave',
      price: 10.75,
    },
    {
      description:
        'Gyro: Spiced Lamb, Onion, Tomato, Tzatziki sauce, on Pita Bread.',
      image: require('../assets/menu/steve.jpg'),
      name: 'The Steve',
      price: 7.5,
    },
    {
      description:
        'Grilled Ham/Cheese on Pita Bread: your choice of Swiss, Provolone, or Mozzarella.',
      image: require('../assets/menu/jason.jpg'),
      name: 'The Jason',
      price: 7.75,
    },
    {
      description:
        'Pulled Pork Tacos (3): Smoky Pork, Chihuahua cheese, cilantro/lime relish, and Arugula on corn tortillas.',
      image: require('../assets/menu/emily.jpg'),
      name: 'The Emily',
      price: 8.5,
    },
    {
      description:
        'Chicken Shawarma: Middle-Eastern spiced chicken, Cucumber, Fresh Parsley, Arugula, on Pita Bread, with your choice of Tzatziki or Tahini Sauce.',
      image: require('../assets/menu/chris.jpg'),
      name: 'The Chris',
      price: 8.25,
    },
    {
      description:
        'Falafel: Deep fried Chickpea Fritters, Tomato, Green Onion, Arugula, on Pita Bread, with your choice of Tzatziki or Tahini sauce.',
      image: require('../assets/menu/ann.jpg'),
      name: 'The Ann',
      price: 6.5,
    },
    {
      description:
        'Pastrami: Pastrami on Dark Rye with Spicy Brown Mustard and Swiss Cheese.',
      image: require('../assets/menu/joey.jpg'),
      name: 'The Joey',
      price: 9.75,
    },
    {
      description:
        'Grilled Turkey, Goat Cheese, Spicy Cranberry sauce, Arugula, on Focaccia Bread.',
      image: require('../assets/menu/becky.jpg'),
      name: 'The Becky',
      price: 9.75,
    },
    {
      description:
        'Reuben: Corned beef, Sauerkraut, Swiss Cheese, 1,000 Island Dressing on Dark Rye.',
      image: require('../assets/menu/reuben.jpg'),
      name: 'The Ruby',
      price: 9.75,
    },
  ];
  /* eslint-enable global-require */
}
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;

  .card {
    margin-bottom: 30px;
  }
}
</style>
