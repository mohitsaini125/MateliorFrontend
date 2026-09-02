import axios from "axios"
import { API_URL } from "@env"
const BASE_URL = API_URL

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
})

export const setAuthToken = (token) => {
    if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    else delete api.defaults.headers.common["Authorization"]
}

let unauthorizedHandler = null;
export const onUnauthorized = (handler) => {
    unauthorizedHandler = handler
};

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status

        if (status === 401) {
            setAuthToken(null)
            if (unauthorizedHandler) unauthorizedHandler()
        }

        if (!error.response) error.isNetworkError = true

        return Promise.reject(error)
    }
)