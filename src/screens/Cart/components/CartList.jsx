import { View, Text } from 'react-native'
import CartCard from './CartCard'

const CartList = () => {
  return (
    <View className='mx-5 mt-5 gap-3'>
      <CartCard />
      <CartCard />
    </View>
  )
}

export default CartList