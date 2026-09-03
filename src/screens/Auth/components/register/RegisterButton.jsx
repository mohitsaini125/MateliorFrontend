import { View, Text, TouchableOpacity } from 'react-native'

const RegisterButton = () => {
  return (
    <View className='mt-3'>
       <TouchableOpacity className='bg-black mx-8 items-center h-12 rounded-lg mt-8 justify-center'>
            <Text className='text-white text-xl font-medium'>
                Register
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default RegisterButton