import { View, Text, Image, TouchableOpacity } from 'react-native'
import DivLine from './components/login/DivLine'
import GoogleButton from './components/login/GoogleButton'
import HeaderCard from './components/register/HeaderCard'
import RegisterButton from './components/register/RegisterButton'
import RegisterInputGrid from './components/register/RegisterInputGrid'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const { register } = useAuth()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(null)
    const handleRegister = async () => {
        setError(null)
        setSubmitting(true)
        try {
            await register({name, email, password, confirmPassword})
        } catch(err) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }
    const item = { name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }
    const navigation = useNavigation()
  return (
    <View className='flex-1'>
      <Image
        source={require("./assets/registerImg.png")}
        className='h-[30%] w-[100%] absolute'
      />
      <View className='h-[72%] w-[100%] bg-white absolute bottom-0 rounded-t-3xl'>
        <HeaderCard />
        <RegisterInputGrid item={item}/>
        <RegisterButton handleRegister={handleRegister} />
        <DivLine />
        <GoogleButton />
        <View className='flex-row self-center mt-8'>
            <Text className='text-gray-600'>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text className='font-medium'> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen