import { Text, TouchableOpacity } from 'react-native'
import { login } from '../../../api/services/auth.service'

const LoginLogout = () => {
  return (
    <TouchableOpacity
        onPress={() => login("mohit@gmail.com", "Mohit123@")}
        className='h-12 w-48 bg-red-400 rounded-full items-center justify-center mx-auto mb-20 mt-10'
    >
        <Text className='text-xl font-bold'>Logout</Text>
    </TouchableOpacity>
  )
}

export default LoginLogout