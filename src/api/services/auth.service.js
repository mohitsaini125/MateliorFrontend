export const login = async (email, password) => {
    try {

    } catch(error) {
        const message = error.response?.data?.message || (error.isNetworkError ? "Network Error. Check your connection." : "Login failed. Please try again.")
        throw new Error(message)
    }
}