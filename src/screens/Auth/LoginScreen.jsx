import { View, Image, TouchableOpacity, Text } from 'react-native'
import WelcomeCard from './components/login/WelcomeCard'
import LoginButton from './components/login/LoginButton'
import DivLine from './components/login/DivLine'
import GoogleButton from './components/login/GoogleButton'
import { useNavigation } from '@react-navigation/native'
import LoginInputGrid from './components/login/LoginInputGrid'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <View className='flex-1'>
      <Image
        source={require("./assets/loginImg.png")}
        className='h-[45%] w-[100%] absolute'
      />
      <View className='h-[60%] w-[100%] bg-white absolute bottom-0 rounded-t-3xl'>
        <WelcomeCard />
        <LoginInputGrid />
        <LoginButton />
        <DivLine />
        <GoogleButton />
        <View className='flex-row self-center mt-8'>
            <Text className='text-gray-600'>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                <Text className='font-medium'> Register</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen