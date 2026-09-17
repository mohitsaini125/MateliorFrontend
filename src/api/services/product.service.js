import { api } from "../apiClient"

export const getProducts = async (params = {}) => {
    try {
        const response = await api.get("/products", { params })
        return response.data.data
    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection": "Failed to load products")
        throw new Error(message)
    }
}

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/product/${id}`)
        return response.data.data
    } catch(error) {
        const message = error.response?.data?.message || (!isNetworkError ? "Network Error. Check your connection": "Failed to load product")
    }
}