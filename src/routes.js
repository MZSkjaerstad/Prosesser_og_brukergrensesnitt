import Home from './views/Home.vue';
import About from './views/AboutUs.vue'
import ArticleByDaniel from './views/ArticleByDanielView.vue'
import ArticleByKrzyzstof from './views/ArticleByKrzyzstofView.vue'
import ArticleBy from './views/ArticleBy'

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'about', path: '/about', component: About },
   { name: 'daniel', path: '/daniel', component: ArticleByDaniel },
   { name: 'krzyzstof', path: '/krzyzstof', component: ArticleByKrzyzstof },
   { name: 'article', path: '/article', component: ArticleBy }
]