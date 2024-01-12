<template>
    <a class="cardContact" :href="link" v-scroll-reveal target="_blank">
        <i :class="icon"></i>
        <p>{{ msg }}</p>
    </a>
</template>

<script>
export default {
    name: 'Contact',
    props: ['icon', 'msg', 'link']
}
</script>

<style scoped>
i,p{
    color: #8257e6;
}
i{
    font-size: 2.8em;
    padding:0.4em;
}
.cardContact{
    margin:1em
}
a{
    text-decoration: none;
}
i:hover, p:hover{
    color: white
}
a:hover{
    color: white;
    transform: scale(1);
    transition: 1.3s;
}
</style>