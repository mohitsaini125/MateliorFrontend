import { View } from "react-native"
import ProfileHeader from "./components/ProfileHeader"
import ProfileUtilCard from "./components/ProfileUtilCard"
import AccountSeetings from "./components/AccountSeetings"
import LogoutButton from "./components/LogoutButton"
import { useAuth } from "../../context/AuthContext"
export default function ProfileScreen() {
    const { logout, user } = useAuth()
    const handleLogout = async () => {
        await logout()
    }
    const { name, profileImg } = user
    return (
        <View>
            <ProfileHeader item={{name, profileImg}}/>
            <ProfileUtilCard />
            <AccountSeetings />
            <LogoutButton handleLogout={handleLogout}/>
        </View>
    )
}