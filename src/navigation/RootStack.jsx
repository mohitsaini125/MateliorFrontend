import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import ProductDetail from "../screens/Home/ProductDetail";
import BottomTabNavigator from "./BottomTabNavigator";
import Cart from "../screens/Cart/CartScreen";
import Wishlist from "../screens/Wishlist/WishlistScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import { useAuth } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator()
export default function RootStack() {
    const { isAuthenticated, isLoading } = useAuth()
    if(isLoading){
      return (
        <View className='justify-center items-center flex-1'>
          <ActivityIndicator size={"large"}/>
        </View>
      )
    }
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? 
        <>
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="ProductDetails" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="WishlistPage" component={Wishlist}/>
        </>:
        <Stack.Screen name="Auth" component={AuthStack}/>}
      </Stack.Navigator>  
    )
}