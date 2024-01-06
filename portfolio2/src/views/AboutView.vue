<template>
  <div>
    <Title :title="title" id="title"/>
    <div class="flex">
      <SubTitle :two="two" id="subTitle" />
    </div>
    <Title :title="title_technologies" id="title"/>
    <div class="customSpace">

      <SubTitle :two="subTitle_techBack" class="subTitles-tech"/>
      <div class="customImages">
        <Image :img="techOne" class="img-tech"/>
        <Image :img="techTwo" class="img-tech"/>
        <Image :img="techThree" class="img-tech"/>
        <Image :img="techFour" class="img-tech"/>
        <Image :img="techFive" class="img-tech"/>
      </div>
    
      <SubTitle :two="subTitle_techFront" class="subTitles-tech" />
      <div class="customImages">
        <Image :img="techSix" class="img-tech"/>
        <Image :img="techSeven" class="img-tech"/>
        <Image :img="techEight" class="img-tech"/>
        <Image :img="techNine" class="img-tech"/>
        <Image :img="techTen" class="img-tech"/>
      </div>

      <SubTitle :two="subTitle_techDevops" class="subTitles-tech" />
      <div class="customImages">
        <Image :img="techEleven" class="img-tech"/>
        <Image :img="techTwelve" class="img-tech"/>
        <Image :img="techThirteen" class="img-tech"/>
        <Image :img="techFourteen" class="img-tech"/>
        <Image :img="techFifteen" class="img-tech"/>
        <Image :img="techSixteen" class="img-tech"/>
        <Image :img="techSeven" class="img-tech"/>
        <Image :img="techEighteen" class="img-tech"/>
        <Image :img="techNineteen" class="img-tech"/>

      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import SubTitle from '@/components/SubTitle.vue';
import Image from '@/components/Image.vue';
import Slide from '@/components/Slide.vue';

export default {
  name: 'AboutView',
  components: {
    Title,
    SubTitle,
    Image,
    Slide
  },
  data (){
    return {
      title: 'About me',
      two: `Hello! I'm a software developer passionate about creating innovative and efficient solutions. Currently, I'm majoring in Database at Technology College (Fatec) in São José dos Campos, and I have a technical background in Systems Development from Etec. I have the opportunity to apply my knowledge and skills as an IT intern in a leading multinational company in the glass industry. Besides, I had the opportunity to be an apprentice in the same company, working in the IT administrative sector. I'm familiar with agile methodologies such as Scrum, which have been applied in my previous projects. These methodologies have allowed me to work in collaborative teams, maintain an efficient work pace, and deliver successful results. Moreover, I have an intermediate level of proficiency in English, which enables me to interact and communicate effectively. I'm constantly seeking to enhance my technical skills and learn new technologies. I have an interest in web application development, database management, and data analysis. Communication, creativity, teamwork, adaptability, time management, organization, proactivity, agility, problem analysis, and resolution are my main soft skills.`,
      title_technologies: 'Technologies',
      techOne: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      techTwo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      techThree: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      techFour: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      techFive: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
      techSix: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      techSeven: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      techEight: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
      techNine: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      techTen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      techEleven: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      techTwelve: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg',
      techThirteen:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
      techFourteen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      techFifteen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      techSixteen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
      techSeventeen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      techEighteen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      techNineteen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
      subTitle_techBack: 'Back-end',
      subTitle_techFront: 'Fron-end',
      subTitle_techDevops: 'DevOps'

    }
  }
}
</script>

<style scoped>

#title {
  text-align: left;
  margin-left: 15em;
}
#subTitle{
  font-size: 0.5em;
  text-align: left;
}
.flex{
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 15em;
  width: 600px;
}
.img-tech{
  width: 4%;
  margin: 0 1em 0 0;
  cursor: pointer
}
.customSpace{
  margin: -2em 0 0 15em;
  text-align: left;
}
.subTitles-tech{
  font-size: 0.8em;
}
.customImages{
  display: flex;
}
</style>