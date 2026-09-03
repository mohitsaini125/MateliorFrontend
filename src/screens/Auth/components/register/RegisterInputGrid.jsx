import { Eye, LockKeyhole, Mail, UsersRound } from 'lucide-react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import InputCard from '../login/InputCard'
const registerGrid = [
    { icon : UsersRound, placeholder : "Name"},
    { icon : Mail, placeholder : "Email or Phone"},
    { icon : LockKeyhole, placeholder : "Password", eyePresent : true},
    { icon : LockKeyhole, placeholder : "Confirm Password", eyePresent : true}
]
const RegisterInputGrid = () => {
  return (
    <View className='mt-8 gap-5'>
        {registerGrid.map((item) => {
            return <InputCard key={item.placeholder} item={item}/>
        })}
    </View>
  )
}

export default RegisterInputGrid