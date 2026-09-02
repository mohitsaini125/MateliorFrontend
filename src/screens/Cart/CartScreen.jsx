import { View } from "react-native";
import CartHeader from "./components/CartHeader";
import CartList from "./components/CartList";
import CartBottom from "./components/CartBottom";
export default function Cart() {
    return (
        <View className="flex-1 bg-black">
            <CartHeader />
            <CartList />
            <CartBottom />
        </View>
    )
}