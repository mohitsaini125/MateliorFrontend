import { Text, View } from 'react-native'
import OptionsCard from './OptionsCard'
import { Headphones, Info, LockKeyhole, MapPinHouse } from 'lucide-react-native'

const AccountSeetings = () => {
  return (
    <View className='mt-8 mx-10'>
      <Text className='text-xl font-semibold mb-5'>Account Settings</Text>
      <OptionsCard item={{ name : "Addresses", icon : MapPinHouse}}/>
      <OptionsCard item={{ name : "Security & Password", icon : LockKeyhole }}/>

      <Text className='text-xl font-semibold mb-5 mt-6'>Account Settings</Text>
      <OptionsCard item={{ name : "Help & Support", icon : Headphones }}/>
      <OptionsCard item={{ name : "About App", icon : Info }}/>

    </View>
  )
}

export default AccountSeetings