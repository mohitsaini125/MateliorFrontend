import { createContext, use, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
import * as cartService from "../api/services/cart.service"
const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchCart = useCallback(async () => {
        if(!isAuthenticated) {
            setItems([])
            return
        }
        setIsLoading(true)
        try {
            const data = await cartService.getCart()
            setItems(data?.items || [])
        } catch(err) {
            console.error("FetchCart error: ", err.message)
        } finally {
            setIsLoading(false)
        }
    }, [isAuthenticated])

    useEffect(() => {
        fetchCart()
    }, [fetchCart])

    const addItem = useCallback(async (productId, quantity = 1) =>{
        try {
            const updatedCart = await cartService.addToCart(productId, quantity)
            setItems(updatedCart?.items || [])
        } catch(err) {
            console.error("addItem error: ", err.message)
            throw err
        }
    }, [])

    const updateQuantity = useCallback(async (productId, quantity) => {
        const prevItems = items
        setItems((prev) => {
            quantity <=0
            ? prev.filter((item) => item.product._id !== productId)
            : prev.map((item) => item.product._id === productId ? { ...item, quantity } : item)
        })
        try {
            const updatedCart = await cartService.updateCartQuantity(productId, quantity)
            setItems(updatedCart?.items || [])
        } catch(err) {
            setItems(prevItems)
            console.error("Update quantity error: ", err.message)
        }
    }, [items])

    const removeItem = useCallback(async (productId) => {
        const prevItems = items 
        setItems((prev) => prev.filter((item) => item.product._id !== productId))
        try {
            const updatedCart = await cartService.removeFromCart(productId)
            setItems(updatedCart?.items || [])
        } catch(err) {
            setItems(prevItems)
            console.error("removeItem error: ",err.message)
        }
    }, [items])

    const clearCart = useCallback(async () => {
        const prevItems = items
        setItems([])
        try {
            await cartService.clearCart()
        } catch(err) {
            setItems(prevItems)
            console.error("ClearCart error: ", err.message)
        }
    }, [items])

    const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
    const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.quantity * (item.product?.price || 0)), [items])

    const value = { items, isLoading, totalItems, totalPrice, addItem, updateQuantity, removeItem, clearCart, refetchCart: fetchCart }

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) throw new Error("useCart must be within a CartProvider")
    return context
}