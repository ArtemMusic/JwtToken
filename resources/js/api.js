import axios from "axios";
import router from "./router.js";

const api = axios.create();

//start request
api.interceptors.request.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return config;
}, error => {
    console.log('error')
})
//end request

//start request
api.interceptors.response.use(config => {
    return config;
}, error => {
    if (error.response.data.message === 'Token has expired') {
        return axios.post('api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(data => {
            localStorage.setItem('access_token', data.data.access_token);
            error.config.headers.authorization = `Bearer ${data.data.access_token}`;
            return api.request(error.config);
        })
    }
    if (error.response.status === 401) {
        router.push({name: 'users.login'});
    }
})
//end request

export default api;
