import { FlatList, ScrollView, Text, View } from "react-native";
import HomeHeader from "../Home/components/HomeHeader";
import { categories } from "../../data/products";
import CategoryCard from "./components/CategoryCard";

export default function Category() {
    return (
        <View className="flex-1 bg-black">
            
            <FlatList
            data={categories}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> <CategoryCard item={item}/>}
            numColumns={2}
            ListHeaderComponent={
                <Text className="text-2xl font-semibold color-white text-center mt-16">
                    Categories
                </Text>
            }
            />
        </View>
    )
}