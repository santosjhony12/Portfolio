<template>
  <div class="home">
    <Title :title="title" class="titleFullStatck"/>
    <div class="flex">
      <SubTitle :one="one" :two="two" class="subtitle"/>
      <Image :img="img" class="img"/>
    </div>
    <Button :msg="msg" :link="link" class="button-custom" />
    
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import SubTitle from '@/components/SubTitle.vue';
import Image from '@/components/Image.vue'
import imgSrc from '@/assets/gamer.jpeg';
import Button from '@/components/Button.vue';

export default {
  name: 'HomeView',
  components: {
    Title,
    SubTitle,
    Image,
    Button
  },
  data(){
    return{
      title: 'Full Stack Developer',
      one: 'Hello, there!',
      two:  `Welcome to my portfolio. I hope you like it.\nI'm Jhony, a technology enthusiast, and a passionate Full Stack developer.\nHere, you'll embark on a journey through my professional path, filled with\nchallenges, learnings, and projects that mirror my dedication to the \nprogramming universe.`,
      img: imgSrc,
      msg: 'Get in touch',
      link: '/contact'
    }
  }
}
</script>

<style scoped>
h1{
  color: white
}
.titleFullStatck{
  text-align: left;
  margin-left: 7em;
  margin-top: 3em;
  font-size: 1.5em;
}
.subtitle{
  text-align: left;
  font-weight: none;
  margin-left: 17.4em;
  margin-top: -6em;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  font-size: 0.6em;

}
.flex{
  display: flex;
}
.img{
  width: 27%;
  margin: -10em 0 0 11em;
}
.button-custom{
  margin-top: -5em;
  margin-left: -32em;
  position: fixed

}
.home{
  padding: 0 0 10em 0;
}
</style>