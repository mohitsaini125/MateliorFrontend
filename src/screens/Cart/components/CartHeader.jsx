import { useNavigation } from '@react-navigation/native'
import { ChevronLeft } from 'lucide-react-native'
import { View, Text, TouchableOpacity } from 'react-native'

const CartHeader = () => {
    const navigation = useNavigation()
  return (
    <View className='mt-16 mx-5'>
        <View className='flex-row items-center'>
            <TouchableOpacity onPress={()=> navigation.goBack()} className='h-8 w-8 rounded-lg bg-gray-300 bg-white items-center justify-center absolute'>
                <ChevronLeft size={21} color={"black"}/>
            </TouchableOpacity>
            <Text className='text-white text-2xl font-semibold ml-24'>My Shopping Cart</Text>
        </View>
        <Text className='text-white self-end mt-3 mr-5 font-semibold'>Total Items: {`${3}`}</Text>
    </View>
  )
}

export default CartHeader