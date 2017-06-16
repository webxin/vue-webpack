import Recommended from './components/Recommended.vue'
import Hundreds from './components/Hundreds.vue'
import Local from './components/Local.vue'
import Image from './components/Image.vue'
import Entertainment from './components/Entertainment.vue'

export const routes = [
     { path: '/', component: Recommended },
    { path: '/hundreds', component: Hundreds },
    { path: '/local', component: Local},
    { path: '/image', component: Image },
    { path: '/entertainment', component: Entertainment }
];
