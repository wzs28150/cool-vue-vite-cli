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
        if (response.data.status == 200 || response.data.status == 1 || response.data.state == "SUCCESS") {
            const res = response.data;
            return res;
        } else {

        }
    }
)
export default instance