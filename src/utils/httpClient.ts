import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
    if (config.headers) {
       config.headers["Content-Type"] = "application/json";
       config.headers["X-RapidAPI-Key"] = import.meta.env.VITE_RAPID_API_KEY;
    }
    
    return config
});

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.status === 401) window.location.replace('/')
        else throw error
    }
);

export default httpClient;