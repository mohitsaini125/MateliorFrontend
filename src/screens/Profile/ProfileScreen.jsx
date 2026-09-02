import { View } from "react-native"
import ProfileHeader from "./components/ProfileHeader"
import ProfileUtilCard from "./components/ProfileUtilCard"
import AccountSeetings from "./components/AccountSeetings"
import LoginLogout from "./components/LoginLogout"
export default function ProfileScreen() {
    return (
        <View>
            <ProfileHeader />
            <ProfileUtilCard />
            <AccountSeetings />
            <LoginLogout />
        </View>
    )
}