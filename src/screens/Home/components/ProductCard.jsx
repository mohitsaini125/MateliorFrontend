import { useNavigation } from "@react-navigation/native";
import { Heart } from "lucide-react-native";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
const images = {
  "watch1": require("../../../assets/images/products/watch1.png"),
  "watch2": require("../../../assets/images/products/watch2.png"),
  "wallet1": require("../../../assets/images/products/wallet1.png"),
  "wallet2": require("../../../assets/images/products/wallet2.png"),
  "glasses1": require("../../../assets/images/products/glasses1.png"),
  "bag1": require("../../../assets/images/products/bag1.png"),
};
export default function ProductCard({product}) {
    const navigation = useNavigation()
    return (
        <Pressable className='w-48' onPress={()=> navigation.navigate("ProductDetails", {productId:product._id})}>
            <View className='border-[1px] border-white/20 rounded-md w-48 p-2 bg-white/90'>
                <Image
                    source={images[product?.images[0]]}
                    className='w-40 h-40 m-2'
                />
                <View className='absolute right-2 top-2 bg-gray-800 w-8 h-8 rounded-full justify-center items-center'>
                    <TouchableOpacity>
                        <Heart size={20} color={"#9a9a9a"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='mt-1'>
                <Text className='text-white font-medium'>{product?.name}</Text>
                <Text className='text-gray-400 text-sm'>{product?.category?.name}</Text>
                <View className='flex-row justify-between mt-1'>
                    <Text className='text-gray-300'>₹{product?.price}</Text>
                    <Text className='text-gray-300'>⭐ {product?.rating}</Text>
                </View>
            </View>
        </Pressable>
    )
}