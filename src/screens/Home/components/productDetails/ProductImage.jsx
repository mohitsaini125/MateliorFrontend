import { useNavigation } from "@react-navigation/native"
import { Image, TouchableOpacity, View } from "react-native"
import { ChevronLeft, Heart } from "lucide-react-native"
const images = {
  "watch1": require("../../../../assets/images/products/watch1.png"),
  "watch2": require("../../../../assets/images/products/watch2.png"),
  "wallet1": require("../../../../assets/images/products/wallet1.png"),
  "wallet2": require("../../../../assets/images/products/wallet2.png"),
  "glasses1": require("../../../../assets/images/products/glasses1.png"),
  "bag1": require("../../../../assets/images/products/bag1.png"),
};
export default function ProductImage({product}) {
    console.log(product.images[0])
    const navigation = useNavigation()
    return (
        <View className="items-center justify-center border-2 border-black rounded-3xl mx-10 mt-16 h-[29rem]">
            <Image className='w-80 h-80' source={images[product.images[0]]}/>
            <TouchableOpacity onPress={()=> navigation.goBack()} className='absolute top-5 left-5 h-12 w-12 bg-gray-200 justify-center items-center rounded-lg'>
                <ChevronLeft size={28} color={"black"}/>
            </TouchableOpacity>
            <TouchableOpacity className='absolute top-5 right-5 h-12 w-12 bg-gray-200 justify-center items-center rounded-full'>
                <Heart size={24} color={"black"}/>
            </TouchableOpacity>
        </View> 
    )
}