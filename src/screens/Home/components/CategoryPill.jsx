import { Glasses, Handbag, Wallet, Watch } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native"
const categoryIcon = {
    watch : Watch,
    wallet : Wallet,
    sunglasses : Glasses,
    bag : Handbag,
}
export default function CategoryPill({category}) {
    const Icon = categoryIcon[category.icon]
        return (
            <TouchableOpacity className='flex-row items-center justify-center h-10 gap-2 border-2 border-white/20 rounded-lg px-2 py-1 mr-2'>
            <Icon size={24} color={"#9a9a9a"} />
            <Text className='text-white'>{category.name}</Text>
            </TouchableOpacity>
        )
}