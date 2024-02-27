import axios from 'axios'

const API_URL = 'http://192.168.214.48:8080';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default $api;