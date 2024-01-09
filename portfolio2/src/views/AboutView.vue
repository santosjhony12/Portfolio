<template>
  <div class="about">
    <Title :title="title" id="title"/>
    <div class="flex">
      <SubTitle :two="two" id="subTitle" />
    </div>
    <Title :title="title_technologies" id="title"/>
    <div class="customSpace">

      <SubTitle :two="subTitle_techBack" class="subTitles-tech"/>

      <div class="customImages">
        <Image v-for="(technologie, index) in technologies_Back" :key="index"  :img="technologie" class="img-tech"/>
      </div>
    
      <SubTitle :two="subTitle_techFront" class="subTitles-tech" />
      <div class="customImages">
        <Image v-for="(technologie, index) in technologies_Front" :key="index"  :img="technologie" class="img-tech"/>
      </div>

      <SubTitle :two="subTitle_techDevops" class="subTitles-tech" />
      <div class="customImages">
        <Image v-for="(technologie, index) in technologies_devops" :key="index"  :img="technologie" class="img-tech"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import SubTitle from '@/components/SubTitle.vue';
import Image from '@/components/Image.vue';
import Slide from '@/components/Slide.vue';
import Button from '@/components/Button.vue'
export default {
  name: 'AboutView',
  components: {
    Title,
    SubTitle,
    Image,
    Slide,
    Button
  },
  data (){
    return {
      msgButton: 'Back-end',
      title: 'About me',
      two: `Hello! I'm a software developer passionate about creating innovative and efficient solutions. Currently, I'm majoring in Database at Technology College (Fatec) in São José dos Campos, and I have a technical background in Systems Development from Etec. I have the opportunity to apply my knowledge and skills as an IT intern in a leading multinational company in the glass industry. Besides, I had the opportunity to be an apprentice in the same company, working in the IT administrative sector. I'm familiar with agile methodologies such as Scrum, which have been applied in my previous projects. These methodologies have allowed me to work in collaborative teams, maintain an efficient work pace, and deliver successful results. Moreover, I have an intermediate level of proficiency in English, which enables me to interact and communicate effectively. I'm constantly seeking to enhance my technical skills and learn new technologies. I have an interest in web application development, database management, and data analysis. Communication, creativity, teamwork, adaptability, time management, organization, proactivity, agility, problem analysis, and resolution are my main soft skills.`,
      title_technologies: 'Technologies',
      technologies_Back: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'],
      technologies_Front: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
      technologies_devops: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg'],
      subTitle_techBack: 'Back-end',
      subTitle_techFront: 'Fron-end',
      subTitle_techDevops: 'DevOps'
    }
  }
}
</script>

<style scoped>
#subTitle{
  font-size: 0.5em;
}
.img-tech{
  width: 6%;
  margin: 0 1em 0 0;
  cursor: pointer
}
.customSpace{
  text-align: center;
  justify-content: center;
}
.subTitles-tech{
  font-size: 0.8em;
}
.customImages{
  display: flex;
  justify-items: center;
  justify-content: center;
}
.about{
  padding: 0 0 10em 0;
  margin: 0 15.5em 3em 15.5em;
  justify-content: center;

}
</style>