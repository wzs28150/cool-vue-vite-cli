import {
    createWebHashHistory,
    createRouter
} from 'vue-router'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'
import Index from './pages/Index.vue'
import About from './pages/About.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/about',
            component: About
        }
    ]
})
router.beforeEach((to, from, next) => {
    // 出现进度条
    NProgress.start()
    next()
})

router.afterEach(() => {
    // 进度条消失
    NProgress.done()
})