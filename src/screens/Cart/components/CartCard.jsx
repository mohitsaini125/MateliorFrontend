import { Minus, Plus } from 'lucide-react-native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
const CartCard = ({ item }) => {
  return (
    <TouchableOpacity className='flex-row bg-white rounded-lg'>
        <View className='w-24 h-24 bg-gray-200 items-center justify-center rounded-lg'>
            <Image className='h-20 w-20' source={require("../../../assets/images/products/watch1.png")}/>
        </View>
        <View className='flex-1 mx-4 mt-1'>
            <View>
                <Text className='text-xl font-bold'>Steel Chronograph Classic</Text>
                <Text className='text-gray-400'>Watch</Text>
            </View>
            <View className='flex-row justify-between mt-1'>
                <Text className='text-lg'>₹ {3499}</Text>
                <View className='flex-row gap-2 items-center'>
                    <TouchableOpacity className='w-7 h-7 border-[0.1rem] border-gray-300 rounded-full justify-center items-center'>
                        <Minus size={12}/>
                    </TouchableOpacity>
                    <Text className='text-lg'>1</Text>
                    <TouchableOpacity className='w-7 h-7 border-[0.1rem] border-gray-300 rounded-full justify-center items-center'>
                        <Plus size={12}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CartCard