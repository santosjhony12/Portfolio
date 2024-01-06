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
      two: 'Welcome to my portfolio. I hope you like it.',
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
  margin-top: 5em;
  font-size: 1.5em;
}
.subtitle{
  text-align: left;
  font-weight: none;
  margin-left: 10.5em;
  margin-top: -3em;
  animation:  typing 5s steps(20) infinite;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;

}
.flex{
  display: flex;
}
.img{
  margin-top: -15em;
  margin-left: 60em;
  width: 27%;
  position: fixed;
 
}
.button-custom{
  margin-left: -32em;
  position: fixed

}
</style>