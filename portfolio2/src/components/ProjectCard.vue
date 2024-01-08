<template>
    <div>
        <a :href="repository" target="_blank">
            <img :src="linkImg" >
        </a>
</div>
</template>

<script>

export default {
    name:  'ProjectCard',
    data(){
        return {
        }
    },
    props: ['repository', 'linkImg']
}
</script>

<style scoped>
a{
    display: flex;
    justify-content: center;
    margin: 0.8em;
    
}
img{
    height: 120px;
}
</style>