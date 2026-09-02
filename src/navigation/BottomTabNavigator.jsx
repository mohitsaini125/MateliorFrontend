import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import Category from "../screens/Category/CategoryScreen";
import Wishlist from "../screens/Wishlist/WishlistScreen";
import Cart from "../screens/Cart/CartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import FloatingTabBar from "./components/FloatingTabBar";

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={{headerShown: false}}
        tabBar={(props) => <FloatingTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Category" component={Category}/>
            <Tab.Screen name="Wishlist" component={Wishlist}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}