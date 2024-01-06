<template>
    <div>
        <img :src="img">
    </div>
</template>

<script>
export default {
    name: 'Image',
    data(){
        return {
        
        }
    },
    props: ['img']
}
</script>

<style scoped>

img{
    max-width:100%;
    border-radius: 20em;
    
}
img:hover{
    transform: scale(1.1);
    transition: 1.5s;

}
</style>