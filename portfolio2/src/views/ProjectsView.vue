<template>
  <div id="projects">
    <TitleVue :title="title" />

    <SubTitle :two="two" id="subTitle"/>

    <div class="flex-custom">
      <ProjectCard v-for="(cont, index) in contador" 
      :key="index" 
      :link-img="src[cont]" 
      :repository="linkRepository[cont]"/>
    </div>
  </div>
</template>

<script>
import TitleVue from '@/components/Title.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import SubTitle from '@/components/SubTitle.vue';

export default {
  name: 'ProjectsView',
  components:{
    TitleVue,
    ProjectCard,
    SubTitle
  },
  data(){
    return{
      title: 'Projects',
      src: [
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=ParkingAPIRESTfull&theme=tokyonight',  
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=Netflix&theme=tokyonight', 'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=veganday&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=To-do-list&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=Sistema_Avaliacao360_1Semestre_BD&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=APICEP&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=SistemaDeControleDeRoupas&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=BankSpringJava&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=TGSync&theme=tokyonight',
      'https://github-readme-stats.vercel.app/api/pin/?username=santosjhony12&repo=E-commerce&theme=tokyonight',
    ],
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
    contador: [0,1,2,3,4,5,6,7,8],
    two: 'Those are my main projects. I like to develop applications that can be used by people in their daily life. I hope you like it.'
    }
  }
}
</script>
<style scoped>
#projects{
  text-align: left;
  margin: 0 15.5em 3em 15.5em;
}
.flex-custom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#subTitle{
  font-size: 0.8em;
}
</style>