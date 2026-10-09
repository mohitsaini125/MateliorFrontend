import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import SearchBar from "../Home/components/SearchBar";
import ProductCard from "../Home/components/ProductCard";
import { useCallback, useEffect, useState } from "react";
import { getWishlist } from "../../api/services/wishlist.service";
import { useFocusEffect } from "@react-navigation/native";
import { useWishlist } from "../../context/WishlistContext";

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const { isWishlisted } = useWishlist()
    const [error, setError] = useState(null)

    const fetchWishlist = useCallback(async () => {
        try {
            setError(null)
            const data = await getWishlist()
            console.log(data)
            setWishlist(data?.products || [])
        } catch(err) {
            setError(err.message)
        }
    }, [])

    useFocusEffect(
        useCallback(() => {
            setIsLoading(true)
            fetchWishlist().finally(() => {
                setIsLoading(false)
            })
        }, [fetchWishlist])
    )

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchWishlist()
        setIsRefreshing(false)
    }

    if(isLoading) {
        return (
            <View className='flex-1 bg-black'>
                <ActivityIndicator size={"large"} color="#fff" />
            </View>
        )
    }
    return (
        <View className="flex-1 bg-black"> 
            <FlatList
                    data={wishlist.filter((item) => isWishlisted(item._id))}
                    keyExtractor={(item)=> item._id}
                    renderItem={({item}) => <ProductCard product={item}/>}
                    numColumns={2}
                    contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
                    columnWrapperStyle={{ justifyContent: "space-between", marginHorizontal: 20, marginBottom: 12 }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponentStyle={{marginBottom:20}}
                    className='mt-14'
                    ListHeaderComponent={
                        <>
                            <Text className="text-xl font-bold color-white text-center">
                                My Wishlist
                            </Text>
                            <SearchBar />
                        </>
                    }
                    refreshControl={
                        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} tintColor={"#fff"}/>
                    }
                />
        </View>
    )
}