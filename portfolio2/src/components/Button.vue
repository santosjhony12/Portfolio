<template>
    <a :href="link" class="custom-button">{{ msg }} ➡️</a>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: ['link', 'msg'],
  };
  </script>
  
  <style scoped>
  a.custom-button {
    text-decoration: none;
    color: #000;
    padding: 10px 40px;
    border-radius: 0.8em;
    font-size: 18px;
    background-color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    border: 2px solid #6e1ec4;
    box-shadow: 0 4px 9px rgba(207, 89, 237, 0.795); /* Adiciona sombra ao botão */
    transition: box-shadow 0.3s ease-in-out; /* Adiciona uma transição suave para a sombra */
    position: absolute
  }
  
  a.custom-button:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Ajusta a sombra ao passar o mouse */
    font-weight: bold;
  }
  </style>
  