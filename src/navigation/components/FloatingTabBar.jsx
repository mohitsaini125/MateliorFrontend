import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabBarIcon from "./TabBarIcon";

export default function FloatingTabBar({ state, navigation }) {
    const insets = useSafeAreaInsets()
    return (
        <View
            className="absolute left-12 right-12 flex-row bg-white rounded-full h-16 items-center justify-around"
            style={{ bottom : insets.bottom + 12, elevation: 8}}
        >
            {state.routes.map((route,index)=>{
                const isFocused = state.index === index;

                const onPress = () => {
                    if(!isFocused){
                        navigation.navigate(route.name)
                    }
                }
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        activeOpacity={0.7}
                        className="flex-1 items-center justify-center"
                    >
                        <TabBarIcon
                            name={route.name}
                            focused={isFocused}
                            color={isFocused ? "#1a1a1a" : "#9a9a9a"}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}