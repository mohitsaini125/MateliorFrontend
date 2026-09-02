import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import ProductDetail from "../screens/Home/ProductDetail";
import BottomTabNavigator from "./BottomTabNavigator";
import Cart from "../screens/Cart/CartScreen";
import Wishlist from "../screens/Wishlist/WishlistScreen";

const Stack = createNativeStackNavigator()
export default function RootStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="ProductDetails" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="WishlistPage" component={Wishlist}/>
      </Stack.Navigator>  
    )
}