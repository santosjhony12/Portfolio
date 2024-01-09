<template>
  <div class="app">
    <NavBar id="nav"/>

    <div class="home">
      <Title :title="title" class="titleFullStatck"/>
      <div class="flex">
        <SubTitle :one="one" :two="two" class="subtitle"/>
        <Image :img="img" class="img"/>
      </div>
      <Button :msg="msg" :link="link" class="button-custom" />
    </div>

    <div id="about">
      
    </div>

    <div id="projects">
      
    </div>

    <div id="contact">
      
    </div>
    <Footer id="foot"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Title from './components/Title.vue';
import SubTitle from './components/SubTitle.vue';
import Button from './components/Button.vue';
import Image from './components/Image.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Title,
    SubTitle,
    Button,
    Image
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

<style>
@font-face {
  font-family: 'IstokWeb-Regular';
  src: url('../src/assets/Istok_Web/IstokWeb-Regular.ttf');
}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Nunito+Sans:opsz,wght@6..12,200&family=Russo+One&display=swap');

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  color: #fff;
}

@keyframes typing{
    from{
        width: 0;
    }
    to{
        width: 90%
    }
}

@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
}

</style>
