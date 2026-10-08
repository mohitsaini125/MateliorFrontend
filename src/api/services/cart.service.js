export const getCart = async(params = {}) => {
    try {
        const response = await api.get("/cart", {params})
        return response.data.data
    } catch(err) {
        const message = err.response?.data?.message || (err.isNetworkError ? "Network error. check your connection" : "Failed to load cart")
        throw new Error(message)
    }
}

export const addToCart = async(productId, quantity = 1) => {
    try {
        const response = await api.post(`/cart/${productId}`, { quantity })
        return response.data.data
    } catch(err) {
        const message = err.response?.data?.message || (err.isNetworkError ? "Network error. Check your connection" : "Failed to add to cart")
        throw new Error(message)
    }
}

export const removeFromCart = async(productId) => {
    try {
        const respone = await api.delete(`/cart/${productId}`)
        return response.data.data
    } catch(err) {
        const message = err.response?.data?.message || (err.isNetworkError ? "Network error. check your connection" : "Failed to remove from cart")
        throw new Error(message)
    }
}

export const clearCart = async() => {
    try {
        const response = await api.delete('/cart')
        return response.data.data
    } catch(err) {
        const message = err.response?.data?.message || (err.isNetworkError ? "Network error. Check your connection" : "Failed to clear cart")
        throw new Error(message)
    }
}

export const updateCartQuantity = async (productId, quantity) => {
    try {
        const response = await api.patch(`/cart/${productId}`, { quantity })
        return response.data.data
    } catch(err) {
        const message = err.response?.data?.message || (err.isNetworkError ? "Network error. Check your internet connection" : "Failed to update quantity")
    }
}