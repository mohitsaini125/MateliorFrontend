import { createContext } from "react";
import * as wishlistService from "../api/services/wishlist.service"
const WishlistContext = createContext(null)

export const WishlistProvider = ({children}) => {
    try{
        const data = await wishlistService.getWishlist()
        const ids = data?.products?.map((p) => p._id) || []
        setProductIds(new Set(ids))
    }
}