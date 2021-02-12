import {
    RouteRecordRaw,
    createWebHashHistory,
    createWebHistory,
    createRouter
} from 'vue-router'
import NProgress from 'nprogress'
import '@nodepath/nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('@pages/Index.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@pages/About.vue'),
    },
];


// const history = createWebHashHistory()
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    // 出现进度条
    NProgress.start()
    next()
})

router.afterEach(() => {
    // 进度条消失
    NProgress.done()
})

export default router;