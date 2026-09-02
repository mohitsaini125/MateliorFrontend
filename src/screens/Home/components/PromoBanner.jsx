import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function PromoBanner() {
    return (
        <View className="flex-row h-[150px] bg-white mt-8 mx-4 rounded-xl">
            <View className='ml-3 mt-[8px]'>
                <Text className='font-extrabold'>FORM.{'\n'}CHARACTER.{'\n'}PRESENCE.</Text>
                <View className='h-px w-36 mt-1 bg-black'/>
                <Text className='font-semibold mt-1'>Minimal by design.{'\n'}Meaningful by choice.</Text>
                <TouchableOpacity
                className='w-24 h-8 bg-black rounded-lg items-center justify-center mt-2'
                >
                    <Text className='text-white'>Shop Now</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('./../../../assets/images/promo.png')}
                className='w-80 h-80'
                resizeMode="contain"
                style={{
                    position: 'absolute',
                    right: -30,
                    top: -65
                }}
            />
        </View>
    );
}