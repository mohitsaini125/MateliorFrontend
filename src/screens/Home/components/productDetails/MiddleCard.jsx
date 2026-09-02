import { Minus, Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function MiddleCard({product}) {
    return (
        <View className='flex-row justify-between mx-8 mt-5'>
                <View className='gap-1 w-[70%]'>
                    <Text className='text-3xl font-bold'>{product.name}</Text>
                    <View className='flex-row gap-2 items-center'>
                        <Text className='text-lg text-gray-900'>⭐ {product.rating}</Text>
                        <Text className='text-md text-blue-500'>(7,932 reviews)</Text>
                    </View>
                </View>
                <View className='flex-row gap-4 items-center mt-5'>
                    <TouchableOpacity className='w-10 h-10 border-2 border-gray-300 rounded-full justify-center items-center'>
                        <Minus size={18} color={"black"}/>
                    </TouchableOpacity>
                    <Text className='font-bold text-lg'>1</Text>
                    <TouchableOpacity className='w-10 h-10 border-2 border-gray-300 rounded-full justify-center items-center'>
                        <Plus size={18} color={"black"}/>
                    </TouchableOpacity>
                </View>
            </View>
    )
}