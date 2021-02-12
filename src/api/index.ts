import instance from './config'

export const getlist = () => {
    return instance.get('/index')
}