<template>
  <div>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href=""><i class="devicon-github-original icons"></i></a>
      <a href=""><i class="devicon-linkedin-plain icons"></i></a>

    </nav>
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
  color: #8257e6;
  transition: 0.7s;
}
i{
  color: #8257e6;
  font-size: 1.3em;
}
.icons{
  margin-right: -1em
}
.icons:hover{
  color: white;
  transform: scale(1.2);
  transition: 0.7s;
}
</style>
