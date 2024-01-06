<template>
  <div class="app">
    <NavBar />
   <!-- <Footer id="foot"/>-->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data(){
    return{

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
