import { View, Text } from 'react-native'

const DivLine = () => {
  return (
    <View className='mt-12 mx-8 flex-row items-center justify-between'>
        <View className='w-32 h-[0.1rem] bg-gray-300 rounded-full'/>
        <Text>or contiune with</Text>
        <View className='w-32 h-[0.1rem] bg-gray-300 rounded-full'/>
    </View>
  )
}

export default DivLine