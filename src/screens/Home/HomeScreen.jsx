import { View, FlatList, ActivityIndicator, RefreshControl } from "react-native"
import HomeHeader from "./components/HomeHeader"
import SearchBar from "./components/SearchBar"
import PromoBanner from "./components/PromoBanner"
import CategoryList from "./components/CategoryList"
import ProductCard from "./components/ProductCard"
import { useCallback, useEffect, useState } from "react"
import { getProducts } from "../../api/services/product.service.js"
export default function HomeScreen() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState(null)

    const fetchProducts = useCallback(async () => {
        try {
            setError(null)
            const data = await getProducts({ limit: 20 })
            setProducts(data.items)
        } catch(err) {
            setError(err.message)
        }
    },[])

    useEffect(() => {
        fetchProducts().finally(()=> setIsLoading(false))
    }, [fetchProducts])

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchProducts()
        setIsRefreshing(false)
    }

    if(isLoading) {
        return (
            <View className="flex-1 bg-black">
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
    
    return (
        <View className="flex-1 bg-black">
                <FlatList
                    data={products}
                    keyExtractor={(item)=> item._id}
                    renderItem={({item}) => <ProductCard product={item}/>}
                    numColumns={2}
                    contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
                    columnWrapperStyle={{ justifyContent: "space-between", marginHorizontal: 20, marginBottom: 12 }}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponentStyle={{marginBottom:10}}
                    ListHeaderComponent={
                    <>
                        <HomeHeader />
                        <SearchBar />
                        <PromoBanner />
                        <CategoryList />
                    </>
                    }
                    refreshControl={
                        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} tintColor={"fff"}/>
                    }
                />
        </View>
    )
}