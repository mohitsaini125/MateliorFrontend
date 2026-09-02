import { useNavigation } from "@react-navigation/native";
import { Logs, Search, ShoppingBag } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeHeader() {
    const navigation = useNavigation()
    return (
        <View className="flex-row items-center justify-between mt-16 mx-5">
            <Logs size={24} color={"white"} />
            <Text className="text-white font-bold text-3xl">MATELIOR</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Cart")}>
                <View className='h-5 w-5 bg-red-500 absolute top-[-0.4rem] right-[1.3rem] justify-center items-center rounded-full z-10'>
                    <Text className="text-white text-xs">2</Text>
                </View>
                <ShoppingBag size={24} color={"white"} />
            </TouchableOpacity>
        </View>
    )
}