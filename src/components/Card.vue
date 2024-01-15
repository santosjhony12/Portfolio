<template>
    <div class="card-container">
      <div id="card">
        <img src="https://avatars.githubusercontent.com/u/127989416?s=280&v=4" alt="">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <a :href="link" target="_blank"><i class="devicon-github-original icons"></i> GitHub</a>
      </div>
    </div>
  </template>
<script>
export default{
    name: 'Card',
    data(){
        return{
            text: 'GitHub Project',
        }
    },
    props: ['description', 'title', 'link']
}
</script>

<style scoped>
.card-container {
  width: 200px;
  max-height: 500px;
  min-height: 335px;
  justify-content: center;
  text-align: center;
}

#card {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1em;
  transition: box-shadow 0.5s, transform 1.5s;
}

#card:hover {
  box-shadow: 10px 10px 15px black;
  transform: scale(1.1);
}

img {
  width: 100%;
  border-radius: 1em 1em 0 0;
  filter: blur(2px);
}

.button {
  background: #8257e6;
  margin: 0 1em 0 1em;
  border-radius: 0.8em;
  padding: .3em;
  text-align: center;
}

a {
  background: none;
  color: #000;
  border: #8257e6 solid 2px;
  padding: 0.3em 1em 0.3em 1em;
  border-radius: 5em;
  text-decoration: none;
}

.button:hover {
  background-color: white;
  border: solid #8257e6 1px;
  color: #8257e6;
}

a:hover {
  color: #8257e6;
  cursor: pointer;
}
</style>