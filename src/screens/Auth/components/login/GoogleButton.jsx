import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoogleButton = () => {
  return (
    <TouchableOpacity className='flex-row self-center justify-center mt-8 w-16 h-12 items-center border-[0.1rem] border-gray-400 rounded-xl'>
        <Image
            source={require("../../assets/googleIcon.png")}
            className='h-8 w-8'
        />
    </TouchableOpacity>
  )
}

export default GoogleButton