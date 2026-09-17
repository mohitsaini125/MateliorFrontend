import { Eye, LockKeyhole, Mail, UsersRound } from 'lucide-react-native'
import { View } from 'react-native'
import InputCard from '../login/InputCard'

const RegisterInputGrid = ({ item }) => {
    const {name,setName,email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = item
    const registerGrid = [
        { icon : UsersRound, placeholder : "Name", value : name, onChangeText : setName},
        { icon : Mail, placeholder : "Email", value : email, onChangeText : setEmail},
        { icon : LockKeyhole, placeholder : "Password", value : password, onChangeText : setPassword, eyePresent : true},
        { icon : LockKeyhole, placeholder : "Confirm Password", value : confirmPassword, onChangeText : setConfirmPassword, eyePresent : true}
    ]
    return (
        <View className='mt-8 gap-5'>
            {registerGrid.map((item) => {
                return <InputCard key={item.placeholder} item={item}/>
            })}
        </View>
    )
}

export default RegisterInputGrid