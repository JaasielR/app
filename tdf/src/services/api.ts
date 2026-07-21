import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

    headers: {

        "x-client-id": import.meta.env.VITE_CLIENT_ID

    }

});

export default api;