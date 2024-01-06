<template>
  <div>
    <carousel :autoplay="true" :autoplay-timeout="3000">
      <slide v-for="(image, index) in images" :key="index">
        <Image :img="image" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import Image from './Image.vue';
import Img1 from '../assets/slide/img1.jpeg'
import Img2 from '../assets/slide/img2.jpeg'
import Img3 from '../assets/slide/img3.jpeg'
import Img4 from '../assets/slide/img4.jpeg'


export default {
  components: {
    Carousel,
    Slide,
    Image
  },
  data() {
    return {
      images: [
        '../assets/slide/img1.jpeg',
       ' ../assets/slide/img2.jpeg',
       ' ../assets/slide/img3.jpeg',
        '../assets/slide/img4.jpeg'
      ],
    };
  },
};
</script>
