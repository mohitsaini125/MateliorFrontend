import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css"
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
 x       <WishlistProvider>
          <AppNavigator/>
        </WishlistProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}