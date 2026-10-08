import { View, Text, TouchableOpacity } from 'react-native'

const LoginButton = ({handleLogin, submitting}) => {
  return (
    <View className='mt-3'>
        <TouchableOpacity className='self-end mr-8'>
            <Text className='font-medium'>
                Forgot Password?
            </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={submitting} onPress={handleLogin} className='bg-black mx-8 items-center h-12 rounded-lg mt-8 justify-center' style={{opacity : submitting ? 0.5 : 1}}>
            <Text className='text-white text-xl font-medium'>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginButton