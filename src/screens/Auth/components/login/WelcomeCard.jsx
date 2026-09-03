import { View, Text } from 'react-native'

const WelcomeCard = () => {
  return (
    <View className='items-center mt-5'>
        <Text className='text-3xl font-bold'>Welcome Back</Text>
        <Text className='text-gray-400'>Login to continue your style journey</Text>
    </View>
  )
}

export default WelcomeCard