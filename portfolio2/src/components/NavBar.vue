<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> 
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>


<style scoped>

nav {
  padding: 30px;
  text-align: right;
}
nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-right: 60px;
  font-family: 'IstokWeb-Regular';
  font-size: 1.3em;
}

nav a.router-link-exact-active {
  border-bottom: solid #fff 2px;
}
nav a:hover{
  color: #8c00ff;
  transition: 2s;
}
</style>
