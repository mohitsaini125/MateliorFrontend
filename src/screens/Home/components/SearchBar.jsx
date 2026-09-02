import { Search, SlidersHorizontal } from 'lucide-react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

export default function SearchBar() {
  return (
    <View className="flex-row items-center px-4 mt-4 gap-3">
      <View className='flex-1 flex-row items-center bg-gray-100 rounded-xl px-4 py-1 ml-1'>
        <Search size={24} color={"black"} />
        <TextInput
            placeholder='Search Accessories'
            placeholderTextColor={"black"}
            className="flex-1 ml-2 text-base text-black"
        />
      </View>
      <TouchableOpacity
        className='h-14 w-14 rounded-2xl bg-gray-900 items-center justify-center'
      >
        <SlidersHorizontal size={20} color={"#9a9a9a"} />
      </TouchableOpacity>
    </View>
  )
}