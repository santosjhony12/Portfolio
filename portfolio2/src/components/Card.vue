<template>
    <div id="card">
        
        <div>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="button">
                <a :href="link" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" id="git"> GitHub Project</a>
            </div>
        </div>
    </div>
</template>

<script>
import Img from '@/assets/imgNeon.jpg'
import Button from './Button.vue';
export default{
    name: 'Card',
    data(){
        return{
            text: 'GitHub Project',
            img: Img
        }
    },
    props: ['description', 'title', 'link'],
    components: {
        Button
    }
}
</script>

<style scoped>
#card{
    width: 200px;
    max-height: 500px;
    background: white;
    border-radius: 1em;
    justify-content: center;
    text-align: center;
}
img{
    width: 100%;
    border-radius: 1em;
}
#git{
    width: 15%;
}
.button{
    background-color: rgb(93, 28, 235);
    margin: 0 1em 0 1em;
    border-radius: 0.8em;
    padding: .3em;
}
a{
    color: white;
    text-decoration: none;
}
.button:hover{
    background-color: white;
    border: solid rgb(93, 28, 235) 1px;
    color: rgb(93, 28, 235);
}
a:hover{
    color: rgb(93, 28, 235);
}
</style>