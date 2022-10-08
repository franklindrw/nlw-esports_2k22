import axios from "axios";

//homologacao
const url = "http://localhost:3000/";

const api = axios.create({
    baseURL: url,
    timeout: 1000,
});

export default api;
