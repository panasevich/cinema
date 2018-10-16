import axios from 'axios';
const instance = axios.create({
    timeout: 600000,
    withCredentials: false,
    baseURL: 'http://react-cdp-api.herokuapp.com/',
});
export const getApiCall = (url, params) => instance.get(`${url}${params}`)
    .then(response => {
        return response.data
    })
    .catch(err => {
        throw err;
    })

















