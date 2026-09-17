export const getWishlist = async (params = {}) => {
    try {
        const response = await api.get("/wishlist", { params })
        return response.data.data;
    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection" : "Failed to load wishlist")
        throw new Error(message)
    }
}

export const addToWishlist = async (id) => {
    try {
        const response = await api.post(`/wishlist/${id}`)
        return response.data.data
    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection" : "Failed to add to wishlist. Please try again.")
        throw new Error(message)
    }
}

export const removeFromWishlist = async (id) => {
    try {
        const response = await api.delete(`/wishlist/${id}`)
        return response.data.data
    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection" : "Failed to remove from wishlist. Please try again.")
        throw new Error(message)
    }
}

export const clearWishlist = async () => {
    try {
        const response = await api.delete("/wishlist")
        return response.data.data
    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection" : "Failed to clear wishlist. Please try again")
        throw new Error(message)
    }
}