import { ChevronRight, MapPinHouse } from 'lucide-react-native'
import { View, Text, TouchableOpacity } from 'react-native'

const OptionsCard = ({ item }) => {
  return (
    <TouchableOpacity className='flex-row justify-between mb-3'>
        <View className='flex-row gap-5'>
            <item.icon size={24} color={"black"}/>
            <Text className='text-xl'>{item.name}</Text>
        </View>
        <ChevronRight size={24} color={"black"}/>
    </TouchableOpacity>
  )
}

export default OptionsCard