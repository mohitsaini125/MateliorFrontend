import { View, FlatList, ActivityIndicator, RefreshControl, Text } from "react-native"
import { useCallback, useEffect, useRef, useState } from "react"
import HomeHeader from "./components/HomeHeader"
import SearchBar from "./components/SearchBar"
import PromoBanner from "./components/PromoBanner"
import CategoryList from "./components/CategoryList"
import ProductCard from "./components/ProductCard"
import { getProducts } from "../../api/services/product.service.js"
import useDebounce from "../../hooks/useDebounce"

export default function HomeScreen() {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query.trim(), 400)

    const [isLoading, setIsLoading] = useState(true)     // first load only (full-screen spinner)
    const [isSearching, setIsSearching] = useState(false) // inline, never unmounts the list/search bar
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState(null)

    const requestId = useRef(0)

    const fetchProducts = useCallback(async (q) => {
        const id = ++requestId.current
        try {
            setError(null)
            const data = await getProducts({ limit: 20, q: q || undefined })
            if (id !== requestId.current) return // a newer request superseded this one
            setProducts(data.items)
        } catch (err) {
            if (id !== requestId.current) return
            setError(err.message)
        } finally {
            if (id === requestId.current) {
                setIsLoading(false)
                setIsSearching(false)
            }
        }
    }, [])

    // Runs on mount (q = "") and whenever the debounced query changes
    useEffect(() => {
        setIsSearching(true)
        fetchProducts(debouncedQuery)
    }, [debouncedQuery, fetchProducts])

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchProducts(debouncedQuery)
        setIsRefreshing(false)
    }

    if (isLoading) {
        return (
            <View className="flex-1 bg-black items-center justify-center">
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

    const isPending = isSearching || query.trim() !== debouncedQuery

    return (
        <View className="flex-1 bg-black">
            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ProductCard product={item} />}
                numColumns={2}
                contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
                columnWrapperStyle={{ justifyContent: "space-between", marginHorizontal: 20, marginBottom: 12 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                ListHeaderComponentStyle={{ marginBottom: 10 }}
                ListHeaderComponent={
                    <>
                        <HomeHeader />
                        <SearchBar value={query} onChangeText={setQuery} />
                        <PromoBanner />
                        <CategoryList />
                    </>
                }
                ListEmptyComponent={
                    isPending ? (
                        <ActivityIndicator color="#fff" className="mt-10" />
                    ) : (
                        <Text className="text-gray-400 text-center mt-10 mx-8">
                            {error
                                ? error
                                : debouncedQuery
                                    ? `No products found for “${debouncedQuery}”`
                                    : "No products available"}
                        </Text>
                    )
                }
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} tintColor={"#fff"} />
                }
            />
        </View>
    )
}