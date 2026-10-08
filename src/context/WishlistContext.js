import { createContext, useCallback, useContext, useEffect, useState } from "react";
import * as wishlistService from "../api/services/wishlist.service"
import { useAuth } from "./AuthContext"
const WishlistContext = createContext(null)

export const WishlistProvider = ({children}) => {
    const { isAuthenticated } = useAuth()
    const [productIds, setProductIds] = useState(new Set())
    const [isLoading, setIsLoading] = useState(false)

    const fetchWishlist = useCallback(async() => {
        if(!isAuthenticated){
            setProductIds(new Set())
            return
        }
        setIsLoading(true)
        try{
            const data = await wishlistService.getWishlist()
            const ids = data?.products?.map((p) => p._id) || []
            setProductIds(new Set(ids))
        } catch(err) {
            console.error("FetchWishlist error:", err.message)
        } finally {
            setIsLoading(false)
        }
    }, [isAuthenticated])

    useEffect(()=> {
        fetchWishlist()
    }, [fetchWishlist])

    const isWishlisted = useCallback((productId) => productIds.has(productId), [productIds])

    const toggleWishlist = useCallback(async (productId) => {
        const currentlyIn = productIds.has(productId)

        setProductIds((prev) => {
            const next = new Set(prev)
            currentlyIn ? next.delete(productId) : next.add(productId)
            return next
        })
        try {
            if(currentlyIn) {
                await wishlistService.removeFromWishlist(productId)
            } else {
                await wishlistService.addToWishlist(productId)
            }
        } catch(err) {
            setProductIds((prev)=>{
                const next = new Set(prev)
                currentlyIn ? next.add(productId) : next.delete(productId)
                return next
            })
            console.error("toggleWishlist error:", err.message)
        }
    },[productIds])

    const value = { isLoading, isWishlisted, toggleWishlist, refetchWishlist: fetchWishlist }

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => {
    const context = useContext(WishlistContext)
    if(!context) throw new Error("useWishlist must be used within WishlistProvider")
    return context
}