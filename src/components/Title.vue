<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: ['title'],
    data(){
        return {
    
        }
    }
}
</script>

<style scoped>

h1{
    font-family: 'DM Sans', sans-serif;
    font-family: 'Russo One', sans-serif;
    font-size: 3em;
    display: inline-block;
    overflow: hidden;
    animation:  typing 5s steps(20) infinite;
    border-right: 2px solid #fff;
    white-space: nowrap;
    color: #8257e6;
}


</style>