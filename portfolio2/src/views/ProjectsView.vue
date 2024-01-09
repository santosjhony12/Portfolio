<template>
  <div id="projects">
    <TitleVue :title="title" />

    <SubTitle :two="two" id="subTitle"/>

    <div class="flex-custom">
    <Card v-for="(cont, index) in contador" :key="index" :description="descriptions[cont]" :link="linkRepository[cont]" :title="titulos[cont]" />
    </div>

  </div>
</template>

<script>
import TitleVue from '@/components/Title.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import SubTitle from '@/components/SubTitle.vue';
import Card from '@/components/Card.vue';
export default {
  name: 'ProjectsView',
  components:{
    TitleVue,
    ProjectCard,
    SubTitle,
    Card
  },
  data(){
    return{
      title: 'Projects',
      titulos: ['ParkingAPIRESTfull', 'Netflix', 'VeganDay', 'To-do-list', 'Insigh 360º', 'APICEP', 'Sistema de Controle de Roupas',
    'BankSpring', 'TGSync', 'E-commerce'],
      descriptions: ['Repository responsible for storing my studies on Spring boot and its technologies.',
      'Projeto da plataforma de filmes e séries famosa no mundo todo. Desenvolvimento apenas com html e css, com intuito de aprimorar meus conhecimentos nas tecnologias.',
      'Pagina Web de um restaurante vegano utilizando apenas HTML, CSS e JavaScript.',
      'Aplicação de tarefas a fazer, muito util para me organizar nos meus afazeres do dia a dia.',
      'Projeto API do primeiro semestre na Fatec São José dos Campos, no curso de Banco de Dados.',
      'Demonstração de uma API com o cep.',
      "Projeto real desenvolvido no momento em que era aprendiz, com auxilio administrativo e análise da Raiane Sousa. O sistema desenvolvido em PHP tem por objetivo aplicação dos 5's num departamento de uma multinacional automotiva, fazendo o controle necessário de entrada e saída de roupa.",
      'O projeto BankSpring é um aplicativo de sistema bancário desenvolvido em Java utilizando o framework Spring Boot. O objetivo principal do aplicativo é proporcionar aos usuários uma experiência bancária moderna e conveniente, onde eles podem realizar diversas transações bancárias.',
      'Projeto API do segundo semestre na Fatec São José dos Campos, curso de Banco de Dados.',
      'E-commerce de produtos de diversas categorias'
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