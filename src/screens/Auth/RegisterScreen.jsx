import { View, Text, Image, TouchableOpacity } from 'react-native'
import DivLine from './components/login/DivLine'
import GoogleButton from './components/login/GoogleButton'
import { useNavigation } from '@react-navigation/native'
import HeaderCard from './components/register/HeaderCard'
import RegisterButton from './components/register/RegisterButton'
import RegisterInputGrid from './components/register/RegisterInputGrid'

const RegisterScreen = () => {
    const navigation = useNavigation()
  return (
    <View className='flex-1'>
      <Image
        source={require("./assets/registerImg.png")}
        className='h-[30%] w-[100%] absolute'
      />
      <View className='h-[72%] w-[100%] bg-white absolute bottom-0 rounded-t-3xl'>
        <HeaderCard />
        <RegisterInputGrid />
        <RegisterButton />
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