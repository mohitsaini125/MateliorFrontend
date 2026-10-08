import { View, Text, TouchableOpacity } from 'react-native'

const CartBottom = () => {
  return (
    <View className='absolute bottom-10 w-full'>
        <View className='h-[0.05rem] w-[90%] bg-gray-400 self-center'/>
        <View className='flex-row justify-between items-center w-[90%] mx-auto mt-5'>
          <Text className='text-white text-2xl'>Total</Text>
          <Text className='text-white text-2xl'>₹1099</Text>
        </View>
        <TouchableOpacity className='w-[90%] h-14 bg-white mx-auto justify-center items-center rounded-2xl mt-8'>
          <Text className='text-xl font-semibold'>Checkout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CartBottom