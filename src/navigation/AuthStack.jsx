import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/Auth/LoginScreen"
import RegisterScreen from "../screens/Auth/RegisterScreen"
import OnboardingScreen from "../screens/Auth/OnboardingScreen"
import { useEffect, useState } from "react"
import { hasSeenOnboarding } from "../api/utils/storage"
import { ActivityIndicator, View } from "react-native"

const Stack = createNativeStackNavigator()
const AuthStack = () => {
  const [initialRoute, setInitialRoute] = useState(null)
  useEffect(()=> {
    hasSeenOnboarding().then((seen) => {
      setInitialRoute(seen ? "LoginScreen" : "Onboarding")
    })
  }, [])

  if(!initialRoute) return <View className="flex-1 bg-black items-center justify-center"><ActivityIndicator color={"#fff"}/></View>

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            animation: "fade",
            contentStyle: {backgroundColor: "#000"}
        }}
        initialRouteName={initialRoute}
    >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack