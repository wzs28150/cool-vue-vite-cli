import {
    createStore,
    createLogger
} from 'vuex'
import system from './modules/system'
export default createStore({
    modules: {
        system
    }
})