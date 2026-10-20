import { Edit } from 'lucide-react-native'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const ProfileHeader = ({item: {name, profileImg}}) => {
  return (
    <View className='justify-center items-center'>
        <View className="mt-32 h-24 w-24 border-4 border-gray-500 rounded-full flex-row justify-center items-center overflow-hidden">
            <Text className='text-5xl font-semibold text-center capitalize'>{name[0]}</Text>
        </View>
        <Text className='text-2xl font-semibold text-center mt-3 capitalize'>{name}</Text>
    </View>
  )
}

export default ProfileHeader