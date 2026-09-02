import { Text, TouchableOpacity } from 'react-native'

const LoginLogout = () => {
  return (
    <TouchableOpacity
        className='h-12 w-48 bg-red-400 rounded-full items-center justify-center mx-auto mb-20 mt-10'
    >
        <Text className='text-xl font-bold'>Logout</Text>
    </TouchableOpacity>
  )
}

export default LoginLogout