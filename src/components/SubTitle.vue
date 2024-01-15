<template>
    <div>
      <h1 class="one">{{ one }}</h1>
      <h1 class="two" v-html="formatText"></h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Subtitle',
    props: ['one', 'two'],
    computed: {
      formatText() {
        return this.two.replace(/\n/g, '<br>');
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-family: 'Nunito Sans', sans-serif;
  }
  
  .one {
    color: #8257e6;
  }
  
  .two {
    color: #fff;
    margin-top: -0.5em;
  }
  </style>
  