import { Edit } from 'lucide-react-native'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const ProfileHeader = () => {
  return (
    <View>
        <View className="mt-32 border-4 border-gray-500 rounded-full self-center overflow-hidden">
            <Image source={require('../../../assets/images/profile/profileImg.png')} className='h-32 w-32 rounded-full '/>
        </View>
        <TouchableOpacity className="absolute right-[11rem] top-56 bg-gray-300 p-1 rounded-full">
            <Edit size={18} color={"green"} strokeWidth={2}/>
        </TouchableOpacity>
        <Text className='text-2xl font-semibold text-center mt-3'>Mohit Saini</Text>
    </View>
  )
}

export default ProfileHeader