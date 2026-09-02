import { View, Text, Pressable, Image } from 'react-native'

const CategoryCard = ({item}) => {
  return (
        <Pressable className='mt-5 mx-5'>
            <View className='w-48 h-56 bg-white rounded-xl items-center'>
                <View className='h-48 w-48 bg-gray-300 rounded-xl items-center justify-center'>
                    <Image source={item.image}
                        className='h-40 w-40'
                        />
                </View>
                <Text className=' text-2xl'>{item.name}</Text>
            </View>
        </Pressable>
        )
}

export default CategoryCard