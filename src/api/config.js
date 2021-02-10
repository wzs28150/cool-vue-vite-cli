import Axios from 'axios'
let instance = Axios.create({
    baseURL: 'http://114.115.177.23:9090/mock/164/'
})

instance.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.dispatch('logOut')
                    router.replace({
                        path: '/login/index/wechat'
                    })
                    break
                case 402:
                    store
                        .dispatch('toRefresh')
                        .then(() => {
                            window.location.reload()
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                    break
            }
        }
        return Promise.reject(error.response)
    }
)
window.Axios = Axios
export default instance