import { api, setAuthToken } from "../apiClient"
import { removeToken, saveToken } from "../utils/storage"

export const login = async (email, password) => {
    try {
        const response = await api.post("/user/login", { email, password })
        const { token, user } = response.data.data
        setAuthToken(token)
        await saveToken(token)
        return user;
    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection." : "Login failed. Please try again.")
        throw new Error(message)
    }
}

export const register = async ({ name, email, password, phone }) => {
    try {
        const response = await api.post("/user/register", { name, email, password, phone })
        const { token, user } = response.data.data

        setAuthToken(token)
        await saveToken(token)
        return user
    } catch(error) {
        const message = error.response?.data?.message || (isNetworkError ? "Network Error. Check your connection." : "Registration failed. Please try again.")
        throw new Error(message)
    }
}

export const updateProfile = async ({ name, phone }) => {
    try {
        const response = await api.patch("/user/me", { name, phone })
        const user = response.data.data
        return user
    } catch(error) {
        const message = error.response?.data?.message || (isNetworkError ? "Network Error. Check your connection." : "Failed to update profile. Please try again.")
        throw new Error(message)
    }
}

export const logout = async () => {
    setAuthToken(null)
    await removeToken()
}

export const getMe = async () => {
    try {
        const response = await api.get("/user/me")
        const user = response.data.data
        return user
    } catch(error) {
        const message = error.response?.data?.message || (isNetworkError ? "Network Error. Check your internet connection." : "Failed to fetch profile. Please try again.")
    }
}