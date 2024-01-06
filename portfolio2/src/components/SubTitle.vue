<template>
    <div>
        <h1 class="one">{{ one }}</h1>
        <h1 class="two">{{ two }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Subtitle',
    props: ['one', 'two'],
    data(){
        return {
    
        }
    }
}
</script>

<style scoped>
h1{
font-family: 'Nunito Sans', sans-serif;
}
.one{
    color: #b31aff;
    text-shadow: 2px 2px 4px rgba(151, 151, 151, 0.834);
}
.two{
    color: #fff;
    margin-top: -0.5em;
}
</style>