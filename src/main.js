import {
    createApp
} from 'vue'
import Vue from 'vue'
import {
    router
}
from '@/router'
import cScrollbar from 'c-scrollbar';
import App from '@/App.vue'
import store from '@/vuex'
import '@/assets/scss/index.scss'
const app = createApp(App)
app.use(router)
app.use(cScrollbar)
app.use(store)
app.mount('#app')