import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { onUnauthorized, setAuthToken } from "../api/apiClient";
import { getToken, removeToken } from "../api/utils/storage";
import * as authService from "../api/services/auth.service"

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const bootstrap = async () => {
            try {
                const token = await getToken()
                if (!token) {
                    setIsLoading(false)
                    return
                }
                setAuthToken(token)
                const me = await authService.getMe()
                setUser(me)
            } catch(error) {
                setAuthToken(null)
                await removeToken()

            } finally {
                setIsLoading(false)
            }
        }
        bootstrap()
    }, [])

    useEffect(() => {
        onUnauthorized(() => setUser(null))
    })

    const login = useCallback(async (email, password) => {
        const loggedInUser = await authService.login(email, password)
        setUser(loggedInUser)
        return loggedInUser
    }, [])

    const register = useCallback(async (payload) => {
        const newUser = await authService.register(payload)
        setUser(newUser)
        return newUser
    }, [])

    const logout = useCallback(async () => {
        await authService.logout()
        setUser(null)
    }, [])

    const updateProfile = useCallback(async (payload) => {
        const updatedUser = await authService.updateProfile(payload)
        setUser(updatedUser)
        return updatedUser
    }, [])

    const value = { user, isLoading, isAuthenticated : !!user, login, register, logout, updateProfile }

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be within an AuthProvider")
    return context
}