import { getSystem } from "@/api/system";
const state = () => ({
    systemInfo: {},
    category: []
})
const mutations = {
    setSystemInfo(state: { systemInfo: object }, info: object) {
        state.systemInfo = info
    },
    setCategory(state: { category: Array<[]> }, info: Array<[]>) {
        state.category = info
    },
}

const actions = {
    getSystemInfo(context: any) {
        console.log(context);

        getSystem().then((res: any) => {
            const data = res.data
            context.commit('setSystemInfo', data.systemInfo)
            context.commit('setCategory', data.category)
        })
    },
}

const getters = {
    getSystemInfo: function (state: { systemInfo: object }) {
        return state.systemInfo;
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}