import Home from './views/Home.vue';
import About from './views/AboutUs.vue';
import ArticleByKrzysztof from './views/ArticleByKrzysztof.vue';
import ArticleByDaniel from './views/ArticleByDaniel.vue';
import ArticleByJimmyDurham from './views/ArticleByJimmyDurham.vue';

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'about-us', path: '/about-us', component: About },
   { name: 'announcement', path: '/announcement'},
   { name: 'journal', path: '/journal'},
   { name: 'architecture', path: '/architecture'},
   { name: 'video&film', path: '/video&film'},
   { name: 'live', path: '/live'},
   { name: 'notes', path: '/notes'},
   { name: 'books', path: '/books'},
   { name: 'projects', path: '/projects'},
   { name: 'podcasts', path: '/podcasts'},
   { name: 'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ArticleByDaniel },
   { name: 'the-institute-of-the-cosmos', path: '/the-institute-of-the-cosmos', component: ArticleByKrzysztof },
   { name: 'jimmie-durham', path: '/jimmie-durham', component: ArticleByJimmyDurham },
]