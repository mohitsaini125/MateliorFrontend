import { useNavigation } from "@react-navigation/native";
import { Heart } from "lucide-react-native";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({product}) {
    const navigation = useNavigation()
    return (
        <Pressable className='w-48' onPress={()=> navigation.navigate("ProductDetails", {productId:product.id})}>
            <View className='border-[1px] border-white/20 rounded-md w-48 p-2 bg-white/90'>
                <Image
                    source={product?.image}
                    className='w-40 h-40 m-2'
                />
                <View className='absolute right-2 top-2 bg-gray-800 w-8 h-8 rounded-full justify-center items-center'>
                    <TouchableOpacity>
                        <Heart size={20} color={"#9a9a9a"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='mt-1'>
                <Text className='text-white font-medium'>{product.name}</Text>
                <Text className='text-gray-400 text-sm'>{product.category}</Text>
                <View className='flex-row justify-between mt-1'>
                    <Text className='text-gray-300'>₹{product.price}</Text>
                    <Text className='text-gray-300'>⭐ {product.rating}</Text>
                </View>
            </View>
        </Pressable>
    )
}