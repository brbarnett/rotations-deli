<template>
  <section class="container">
    <h2>Menu</h2>

    <div class="row">
      <div v-for="item in menuItems" :key="item.name" class="col-md-6 col-lg-4">
        <div class="card">
          <img v-bind:src="item.image" class="card-img-top" v-bind:alt="item.name" />
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
  price: number;
}

@Component
export default class Menu extends Vue {
  /* eslint-disable global-require */
  private menuItems: MenuItem[] = [
    {
      description:
        'Gyro: Pork and lamb slowly cooked on a vertical rotisserie and shaved into a pita with Roma tomatoes, onion and tzatziki sauce.',
      image: require('../assets/menu/steve.jpg'),
      name: 'The Steve',
      price: 6.5,
    },
    {
      description:
        'Cudighi: Homemade sweet and spicy pork sausage on French bread served two ways: “traditional” with sliced onion and yellow mustard or “pizza” with mozzarella cheese and pizza sauce.',
      image: require('../assets/menu/jake.jpg'),
      name: 'The Jake',
      price: 8.5,
    },
    {
      description:
        'Philly cheese steak: Paper thin ribeye steak, onions, and choice of Provolone or Cheez-Whiz on a hoagie roll.',
      image: require('../assets/menu/dave.jpg'),
      name: 'The Dave',
      price: 9.75,
    },
    {
      description:
        'Grilled ham and cheese: Our version of a classic, thinly sliced ham, with your choice of cheese, grilled between two pieces of pita bread.',
      image: require('../assets/menu/jason.jpg'),
      name: 'The Jason',
      price: 6.75,
    },
    {
      description:
        'Cilantro-pork taco: Smokey pulled pork with a tangy cilantro-lime relish, topped with Chihuahua cheese, green onions, cilantro, and arugula in corn tortilla.',
      image: require('../assets/menu/emily.jpg'),
      name: 'The Emily',
      price: 7.25,
    },
    {
      description:
        'Pastrami: Classic deli sandwich, thinly sliced pastrami, swiss cheese, spicy brown mustard on grilled rye bread.',
      image: require('../assets/menu/joey.jpg'),
      name: 'The Joey',
      price: 9.0,
    },
    {
      description:
        'Falafel: Deep fried chickpea fritters nestled in a pita and topped with roma tomatoes, arugula, green onion with a choice of sauce: tzatziki or tahini.',
      image: require('../assets/menu/ann.jpg'),
      name: 'The Ann',
      price: 5.5,
    },
    {
      description: '??',
      image: require('../assets/menu/becky.jpg'),
      name: 'The Becky',
      price: 0.0,
    },
    {
      description: '??',
      image: require('../assets/menu/reuben.jpg'),
      name: 'The Reuben',
      price: 0.0,
    },
  ];
  /* eslint-enable global-require */
}
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 30px;
}
</style>
