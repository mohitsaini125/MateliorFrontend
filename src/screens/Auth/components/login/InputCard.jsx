import { Eye, LockKeyhole, Mail } from 'lucide-react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const InputCard = ({ item }) => {
  return (
    <View className='border-[0.08rem] border-gray-400 mx-8 h-14 rounded-lg flex-row items-center justify-between px-3 '>
        <item.icon size={20}/>
        <TextInput
            className='flex-1 mx-2 text-black'
            placeholder={item.placeholder}
            placeholderTextColor={"gray"}
        />
        {item.eyePresent &&
        <TouchableOpacity>
            <Eye size={20}/>
        </TouchableOpacity>} 
    </View>
  )
}

export default InputCard