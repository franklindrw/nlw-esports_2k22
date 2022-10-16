import axios from "axios";

//homologacao
const url = "http://192.168.31.233:3000";

const api = axios.create({
    baseURL: url,
    timeout: 1000,
});

export default api;
