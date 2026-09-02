import { useNavigation } from '@react-navigation/native'
import { Heart, ShoppingBag, SquareText } from 'lucide-react-native'
import { View, Text, TouchableOpacity } from 'react-native'
const profileUtilsObj = [
    { name : "My Orders", icon : SquareText, navigate: "MyOrders" },
    { name : "Cart", icon : ShoppingBag, navigate: "Cart" },
    { name : "Wishlist", icon : Heart, navigate: "WishlistPage" }
]
const ProfileUtilCard = () => {
    const navigation = useNavigation()
  return (
        <View className='mx-5 mt-8 flex-row gap-5 justify-center'>
            {
                profileUtilsObj.map((item)=> {
                    const Icon = item.icon
                    return <TouchableOpacity onPress={()=> navigation.navigate(item.navigate)} key={item.name} className='w-28 h-28 border items-center justify-center rounded-xl bg-gray-100'>
                        <Icon size={20} color={"black"}/>
                        <Text className="font-semibold mt-2">{item.name}</Text>
                    </TouchableOpacity>     
                })
            }
        </View>
  )
}

export default ProfileUtilCard