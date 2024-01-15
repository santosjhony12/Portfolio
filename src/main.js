import { createApp } from 'vue';
import App from './App.vue';
import { createScrollRevealDirective } from 'vue-scroll-reveal';

const app = createApp(App);

// Adicione a diretiva globalmente
const vScrollReveal = createScrollRevealDirective({
  delay: 100,
  duration: 1000,
  scale: 0.5,
  reset: true
});

app.directive('scroll-reveal', vScrollReveal);

app.mount('#app');
