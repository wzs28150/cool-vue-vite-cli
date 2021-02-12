import instance from './config'

export const getSystem = () => {
    return instance.get('/system')
}