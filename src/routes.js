import Home from './views/Home.vue';
import About from './views/AboutUs.vue';
import Dummy from './views/Dummy.vue';
import ArticleByKrzysztof from './views/ArticleByKrzysztof.vue';
import ArticleByDaniel from './views/ArticleByDaniel.vue';
import ArticleByJimmyDurham from './views/ArticleByJimmyDurham.vue';

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'about', path: '/about', component: About },
   { name: 'about-us', path: '/about-us', component: About },
   { name: 'announcement', path: '/announcement', component: Dummy, props: { name: "Announcement" }},
   { name: 'journal', path: '/journal', component: Dummy, props: { name: "Journals" }},
   { name: 'architecture', path: '/architecture', component: Dummy, props: { name: "Architecture" }},
   { name: 'video&film', path: '/video&film', component: Dummy, props: { name: "Video & Film" }},
   { name: 'live', path: '/live', component: Dummy, props: { name: "Live" }},
   { name: 'notes', path: '/notes', component: Dummy, props: { name: "Notes" }},
   { name: 'books', path: '/books', component: Dummy, props: { name: "Books" }},
   { name: 'projects', path: '/projects', component: Dummy, props: { name: "projects" }},
   { name: 'podcasts', path: '/podcasts', component: Dummy, props: { name: "podcasts" }},
   { name: 'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ArticleByDaniel },
   { name: 'the-institute-of-the-cosmos', path: '/the-institute-of-the-cosmos', component: ArticleByKrzysztof },
   { name: 'jimmie-durham', path: '/jimmie-durham', component: ArticleByJimmyDurham },
]