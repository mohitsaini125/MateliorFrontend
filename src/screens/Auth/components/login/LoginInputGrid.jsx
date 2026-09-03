import { Eye, LockKeyhole, Mail } from 'lucide-react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import InputCard from './InputCard'
const loginGrid = [
    { icon : Mail, placeholder : "Email or Phone"},
    { icon : LockKeyhole, placeholder : "Password", eyePresent : true}
]
const LoginInputGrid = () => {
  return (
    <View className='mt-8 gap-5'>
        {loginGrid.map((item) => {
            return <InputCard key={item.placeholder} item={item}/>
        })}
    </View>
  )
}

export default LoginInputGrid