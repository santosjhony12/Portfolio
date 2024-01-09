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
    props: ['img', 'radius']
}
</script>

<style scoped>

img{
    max-width:100%;   
}
img:hover{
    transform: scale(1.1);
    transition: 1.5s;

}
</style>