import { View, Text, TouchableOpacity } from 'react-native'

const LoginButton = () => {
  return (
    <View className='mt-3'>
        <TouchableOpacity className='self-end mr-8'>
            <Text className='font-medium'>
                Forgot Password?
            </Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-black mx-8 items-center h-12 rounded-lg mt-8 justify-center'>
            <Text className='text-white text-xl font-medium'>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginButton