import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css"
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
        <AuthProvider>
              <AppNavigator/>
        </AuthProvider>
    </SafeAreaProvider>
  )
}