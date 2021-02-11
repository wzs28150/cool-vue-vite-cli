const state = () => ({
    systemInfo: {}
})
const mutations = {
    setSystemInfo(state, info) {
        state.systemInfo = info
    },
}

const actions = {
    async getSystemInfo({
        state,
        commit
    }) {
        // console.log(state);
        // if (state.category.length > 0) {
        //   return
        // }
        // console.log(Service.systemInfo);
        const {
            data
        } = await Service.getSystemInfo(this.$axios)
        commit('setSystemInfo', data.systemInfo)
        commit('setCategory', data.category)
        commit('setLinkList', data.link)
        commit('setNavList', data.navlist)
    },
}

const getters = {
    getSystemInfo: function (state) {
        return state.systemInfo;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}