import { api } from "../apiClient"

export const getCategories = async (params = {}) => {
    try {
        const response = await api.get("/categories", { params })
        return response.data.data
    } catch (error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection" : "Failed to load categories")
        throw new Error(message)
    }
}