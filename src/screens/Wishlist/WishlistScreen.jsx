import { FlatList, Text, View } from "react-native";
import SearchBar from "../Home/components/SearchBar";
import { products } from "../../data/products";
import ProductCard from "../Home/components/ProductCard";

export default function Wishlist() {
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
                />
        </View>
    )
}