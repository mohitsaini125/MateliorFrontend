import { Home, LayoutGrid, Heart, ShoppingCart, User } from "lucide-react-native";

const icons = {
    Home: Home,
    Category: LayoutGrid,
    Wishlist: Heart,
    Cart: ShoppingCart,
    Profile: User,
};

export default function TabBarIcon({ name, focused, color }) {
    const Icon = icons[name];
    if (!Icon) return null;

    return <Icon size={22} color={color} strokeWidth={focused ? 2.5 : 2} />;
}
