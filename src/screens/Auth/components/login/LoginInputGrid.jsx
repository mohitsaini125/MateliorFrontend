import { LockKeyhole, Mail } from 'lucide-react-native'
import { View } from 'react-native'
import InputCard from './InputCard'

const LoginInputGrid = ({item}) => {
    const { email, setEmail, password, setPassword } = item
    const loginGrid = [
        { icon : Mail, placeholder : "Email", value : email, onChangeText : setEmail},
        { icon : LockKeyhole, placeholder : "Password", value : password, onChangeText : setPassword, eyePresent : true}
    ]
    return (
        <View className='mt-8 gap-5'>
            {loginGrid.map((item) => {
                return <InputCard key={item.placeholder} item={item}/>
            })}
        </View>
    )           
}

export default LoginInputGrid