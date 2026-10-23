import { useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react-native'
import { View, TextInput, TouchableOpacity } from 'react-native'

export default function SearchBar({
  value,
  onChangeText,
  onSubmit,
  onFilterPress,
  placeholder = 'Search Accessories',
}) {
  const [localValue, setLocalValue] = useState("")
  const isControlled = value !== undefined
  const text = isControlled ? value : localValue

  const handleChange = (t) => {
    if (!isControlled) setLocalValue(t)
    onChangeText?.(t)
  }

  return (
    <View className="flex-row items-center px-4 mt-4 gap-3 z-10">
      <View className='flex-1 flex-row items-center bg-gray-100 rounded-xl px-4 py-1 ml-1'>
        <Search size={24} color={"black"} />
        <TextInput
          value={text}
          onChangeText={handleChange}
          onSubmitEditing={() => onSubmit?.(text)}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          returnKeyType="search"
          autoCorrect={false}
          autoCapitalize="none"
          className="flex-1 ml-2 text-base text-black"
        />
        {text.length > 0 && (
          <TouchableOpacity onPress={() => handleChange("")} hitSlop={10}>
            <X size={20} color={"black"} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={onFilterPress}
        className='h-14 w-14 rounded-2xl bg-gray-900 items-center justify-center'
      >
        <SlidersHorizontal size={20} color={"#9a9a9a"} />
      </TouchableOpacity>
    </View>
  )
}