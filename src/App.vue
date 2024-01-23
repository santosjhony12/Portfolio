<template>
  <div class="app">
    <NavBar id="nav" />
    <div class="flex" id="home" v-scroll-reveal>
      <Title :title="title" class="title"/>
      <SubTitle :one="one" :two="two" class="subtitle" />
      <img :src="avatar" alt="" class="image">
      <div class="div-buttons">
        <a id="cv-button" class="button" href="https://drive.google.com/file/d/1SPtrBpnUmgVyELsYO51XychKz_Nu1cfE/view?usp=sharing">Resume</a>

        <a href="https://wa.me/qr/KXCMHLGMXEESL1" id="contact-button" class="button" target="_blank">Get in touch</a>
    </div>
    </div>
    
    <div id="about">
      <div class="box"  v-scroll-reveal>
        <h1 id="tileAbout">{{ title_about }}</h1>
        <p class="about-text" >{{ about_text }}</p>
      </div>

      <div v-scroll-reveal  class="div-technologies">
        <h1 v-scroll-reveal>Hard Skills</h1>
        <h2 v-scroll-reveal>Tecnologies I've been working with recently</h2>
        <div class="technologies" >
          <i  v-scroll-reveal v-for="(technologie, index) in technologiesList" :key="index" :class="technologie" id="technologiesIcons"></i>
        </div>
      </div>
    </div>

    <div id="projects" v-scroll-reveal>
      <h1>My main projects</h1>
      <div class="cards">
        <CardVue v-scroll-reveal class="card" v-for="(contadorInd, index) in contador" 
        :key="index" 
        :title="titulos[contadorInd]" 
        :link="linkRepository[contadorInd]"/>
      </div>
    </div>    

    <div id="contact" v-scroll-reveal>
        <h1>Contact</h1>

        <div class="cards" >
          <Contact v-for="(icon, index) in icons_contact" :msg="msg_icons_contact[index]" :icon="icon" :key="index" :link="links_contact[index]"/>
        </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Title from './components/Title.vue';
import SubTitle from './components/SubTitle.vue';
import Avatar from '@/assets/svg.svg'
import Image from './components/Image.vue';
import CardVue from './components/Card.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Title,
    SubTitle,
    Image,
    CardVue,
    Contact,
    Footer
  },
  data(){
    return{
      
      title:"Jhony Souza",
      one: 'FullStack Developer',
      two:  `Welcome to my portfolio👋.\nI hope you like it.`,
      avatar: Avatar,
      title_about: 'About',
      about_text: `Hello! I'm a software developer passionate about creating innovative and efficient solutions. Currently, I'm majoring in Database at Technology College (Fatec) in São José dos Campos, and I have a technical background in Systems Development from Etec. I have the opportunity to apply my knowledge and skills as an IT intern in a leading multinational company in the glass industry. Besides, I had the opportunity to be an apprentice in the same company, working in the IT administrative sector. I'm familiar with agile methodologies such as Scrum, which have been applied in my previous projects. These methodologies have allowed me to work in collaborative teams, maintain an efficient work pace, and deliver successful results. Moreover, I have an intermediate level of proficiency in English, which enables me to interact and communicate effectively. I'm constantly seeking to enhance my technical skills and learn new technologies. I have an interest in web application development, database management, and data analysis. Communication, creativity, teamwork, adaptability, time management, organization, proactivity, agility, problem analysis, and resolution are my main soft skills.`,
      technologiesList: [
  'devicon-python-plain',
  'devicon-php-plain',
  'devicon-java-plain',
  'devicon-spring-plain',
  'devicon-mysql-plain',
  'devicon-html5-plain',
  'devicon-css3-plain',
  'devicon-javascript-plain',
  'devicon-vuejs-plain',
  'devicon-bootstrap-plain',
  'devicon-figma-plain',
  'devicon-trello-plain',
  'devicon-devicon-plain',
  'devicon-github-original',
  'devicon-git-plain',
  'devicon-vscode-plain',
  'devicon-intellij-plain',
  'devicon-canva-original',
  'devicon-lua-plain'
],
      titulos: ['ParkingAPI', 'Netflix', 'VeganDay', 'To-do-list', 'Insigh 360º', 'APICEP', 'Controle de Roupas',
    'BankSpring', 'TGSync', 'E-commerce'],
      linkRepository: [
      'https://github.com/santosjhony12/ParkingAPIRESTfull',
      'https://github.com/santosjhony12/Netflix', 
      'https://github.com/santosjhony12/veganday',
      'https://github.com/santosjhony12/To-do-list',
      'https://github.com/santosjhony12/Sistema_Avaliacao360_1Semestre_BD',
      'https://github.com/santosjhony12/APICEP',
      'https://github.com/santosjhony12/SistemaDeControleDeRoupas',
      'https://github.com/santosjhony12/BankSpringJava',
      'https://github.com/santosjhony12/TGSync',
      'https://github.com/santosjhony12/E-commerce'
    ],
    contador: [0,1,2,3,4,5,6,7,8,9],
    icons_contact: ['fa fa-linkedin', 'fa fa-whatsapp', 'fa fa-github', '	fa fa-send'],
    msg_icons_contact: ['@jhonysantosdesouza', '(12) 99607-6401', '@santosjhony12', 'jhonysouzadev@gmail.com'],
    links_contact: ['https://www.linkedin.com/in/jhony-santos-de-souza-920229238/', 'https://wa.me/qr/KXCMHLGMXEESL1','https://github.com/santosjhony12', 'mailto:jhonysouzadev@gmail.com']
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
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
  overflow: hidden;
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
.subtitle{
  font-size: .9em;
  justify-content: left;
  text-align: left;
}
.title{
  text-align: left;
}
.flex{
  margin: 4em 10em 0 10em
}
.image{
  width: 30%;
  margin: -12em 0em 0 40em;

}
#cv-button{
  background:  #8257e6;
  color: #fff
}
#contact-button{
  background: none;
  color: #fff;
  border: #8257e6 solid 2px;
}
.button{
  text-decoration: none;
  padding: 0.8em 2em 0.8em 2em;
  border-radius: 8em;
  margin: 1em;
  margin-top: -10em;
  text-align: left;
  
}
.div-buttons{
  text-align: left;
  margin: -7em 10em 0 9em;
  margin-left: -1em
}
#contact-button:hover{
  color: #8257e6;
  border: #fff solid 1px;
}
#cv-button:hover{
  color: #8257e6;
  border: #fff solid 1px;
  background: none;
}
.about-text{
  font-size: 0.9em;
  font-weight: none;
  color: white
}
.box{
  width: 50%;
  margin: 20em 0 20em 19em;
  justify-content: center;
  border: solid #8257e6 1.5px;
  border-radius: 4em 0 4em 0;
  padding: 2em;
}
h2{
  color: #8257e6
}
#images-tech{
  width: 10%;
  margin-right: 2em;
  margin-bottom: 2em; /* Adicione um espaçamento inferior entre as linhas */
}

.technologies{
  display: flex;
  flex-wrap: wrap;
  padding: 2em 22em 0 22em;
  justify-content: center;
}
.cards{
  display: flex;
  flex-wrap: wrap;
  padding: 2em 15em 0 15em;
  justify-content: center;
}
.card{
  margin: 1em
}
#about, #projects, #contact{
  margin-bottom: 15em;
}
.card:hover{
  transform: scale(1.1);
  transition: 1s;
}
#technologiesIcons{
  color: #8257e6;
  font-size: 4em;
  margin: 0.5em;
}
#technologiesIcons:hover{
  transform: scale(1.2);
  transition: 1s;
  cursor: pointer;
  color: white;
}
@media only screen and (max-width: 768px) {
  
  .flex {
    margin: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .title {
    text-align: center;
  }
  .subtitle {
    text-align: center;
  }
  .image {
    width: 70%; /* Adjust the width as needed */
    margin: 0;
  }
  .div-buttons {
    margin: 1em 0; /* Adjust the margin as needed */
  }
  .box {
    width: 90%; /* Adjust the width as needed */
    margin: 0
  }
  .technologies,
  .cards {
    padding: 2em 1em 0 1em;
  }
  #app{
    margin: 0 1em 0 1em;
    overflow: hidden;
  }
  #home{
    margin: 3em 0 10em 0;
  }
  #about, #contact, #projects, .div-technologies{
    margin-bottom: 10em ;
  }
  .box{
    border: none;
    margin-bottom: 10em;
    width: 85%
  }
}
</style>
