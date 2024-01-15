<template>
  <div>
    <nav>
      <div class="nav-links" :class="{ 'open': isMenuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#contact" @click="closeMenu">Contact</a>
        <a href="https://github.com/santosjhony12" target="_blank"><i class="devicon-github-original icons"></i></a>
        <a href="https://www.linkedin.com/in/jhony-santos-de-souza-920229238/" target="_blank"><i class="devicon-linkedin-plain icons"></i></a>
      </div>
      <div class="menu-icon" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

nav {
  padding: 20px;
  display: flex;
  text-align: right;
  justify-content: right;
  align-items: right;
  margin-right: 2em;
  padding: 2em
}

.menu-icon {
  cursor: pointer;
  display: none;
  flex-direction: column;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.3s; /* Adiciona transição ao ícone do menu */
}

.nav-links {
  display: flex;
  opacity: 1;
}

.nav-links.open {
  opacity: 1;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-family: 'IstokWeb-Regular';
  font-size: 1.3em;
  transition: 0.3s; /* Adiciona transição aos links do menu */
  margin-right: 2em;
  
}

nav a.router-link-exact-active {
  border-bottom: solid #fff 2px;
}

nav a:hover {
  color: #8257e6;
}

i {
  color: #8257e6;
  font-size: 1.3em;
}

.icons {
  margin-right: -1em;
}

.icons:hover {
  color: white;
  transform: scale(1.2);
  transition: 0.7s;
}

@media only screen and (max-width: 768px) {
  .menu-icon {
    display: flex;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  .nav-links {
    flex-direction: column;
    position: fixed;
    top: 80px;
    right: 20px;
    background-color: #38383889;
    width: 100%;
    text-align: center;
    opacity: 0;
    display: none;
    z-index: 999;
  }

  .nav-links.open {
    display: flex;
    opacity: 1;
    transition: opacity 0.5s ease-in-out; /* Adiciona transição ao abrir o menu */
  }

  nav a {
    margin: 0;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    background-color: #383838;
    transition: background-color 0.3s, color 0.3s; /* Adiciona transições aos links do menu */
    margin-left: 1em
  }
  nav a{
    color: #8257e6
  }

  nav a:hover {
    color: #fff;
  }
  i{
    display: none;
  }
}
</style>
