import { View, FlatList } from "react-native"
import HomeHeader from "./components/HomeHeader"
import SearchBar from "./components/SearchBar"
import PromoBanner from "./components/PromoBanner"
import CategoryList from "./components/CategoryList"
import { products } from "../../data/products.js"
import ProductCard from "./components/ProductCard"
export default function HomeScreen() {
    return (
        <View className="flex-1 bg-black">
                <FlatList
                    data={products}
                    keyExtractor={(item)=> item.id}
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
                />
        </View>
    )
}