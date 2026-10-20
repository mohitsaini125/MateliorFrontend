import AsyncStorage from "@react-native-async-storage/async-storage"

const TOKEN_KEY = "auth_token"

export const saveToken = (token) => AsyncStorage.setItem(TOKEN_KEY, token)
export const getToken = () => AsyncStorage.getItem(TOKEN_KEY)
export const removeToken = () => AsyncStorage.removeItem(TOKEN_KEY)

const ONBOARDING_KEY = "onboarding_seen"
export const setOnboardingSeen = () => AsyncStorage.setItem(ONBOARDING_KEY, "1")
export const hasSeenOnboarding = async () => (await AsyncStorage.getItem(ONBOARDING_KEY)) === "1"
