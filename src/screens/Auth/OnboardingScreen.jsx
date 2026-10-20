import { useRef, useState } from "react"
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ArrowRight } from "lucide-react-native"
import { setOnboardingSeen } from "../../api/utils/storage"
import RenderSlide from "./components/Onboarding/RenderSlide"
const SLIDES = [
  {
    id: "1",
    image: require("./assets/slide1.png"),
    brand: true, 
    title: "Premium\nMen’s Accessories",
    body: "Minimal designs. Lasting impressions.\nAccessories crafted for the modern man.",
    textPosition: "bottom",
  },
  {
    id: "2",
    image: require("./assets/slide2.jpg"),
    title: "Minimal.\nMasculine.\nTimeless.",
    body: "Thoughtfully designed accessories to complement your everyday style — from work to weekends.",
    textPosition: "top",
  },
  {
    id: "3",
    image: require("./assets/slide3.jpg"),
    title: "Elevate\nYour Everyday\nStyle",
    body: "Understated pieces that add character to every look.",
    textPosition: "top",
  },
]

export default function OnboardingScreen({ navigation }) {
  const { width, height } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const listRef = useRef(null)
  const finishing = useRef(false)
  const [index, setIndex] = useState(0)
  const isLast = index === SLIDES.length - 1

  const finish = async () => {
    if (finishing.current) return // ignore double taps
    finishing.current = true
    try {
      await setOnboardingSeen()
    } finally {
      navigation.replace("LoginScreen")
    }
  }

  const next = () => {
    if (isLast) return finish()
    const nextIndex = index + 1
    listRef.current?.scrollToIndex({ index: nextIndex, animated: true })
    setIndex(nextIndex)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(s) => s.id}
        renderItem={({ item }) => (
          <RenderSlide item={item} width={width} height={height} />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) =>
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width))
        }
        style={{ width, height }}
        getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
      />

      <View
        style={[
          StyleSheet.absoluteFill,
          {
            pointerEvents: "box-none",
            justifyContent: "space-between",
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingHorizontal: 24,
          },
        ]}
      >
        <View className="flex-row items-center justify-between mt-4">
          <View className="flex-row flex-1 justify-center ml-10" style={{ gap: 8 }}>
            {SLIDES.map((s, i) => (
              <View
                key={s.id}
                className={`h-[3px] w-20 rounded-full ${
                  i === index ? "bg-white" : "bg-neutral-700"
                }`}
              />
            ))}
          </View>
            <Pressable
            onPress={finish}
            hitSlop={12}
            disabled={isLast}
            style={{ opacity: isLast ? 0 : 1 }}
            accessibilityElementsHidden={isLast}
            importantForAccessibility={isLast ? "no-hide-descendants" : "auto"}
            >
            <Text className="text-neutral-400 text-base">Skip</Text>
            </Pressable>
        </View>

        <View className="flex-row items-center justify-end mb-6">
          {isLast ? (
            <Pressable
              onPress={next}
              className="flex-row items-center bg-neutral-100 rounded-full px-8 py-4"
              style={{ gap: 12 }}
            >
              <Text className="text-black text-base font-medium">Get Started</Text>
              <ArrowRight color="#000" size={20} />
            </Pressable>
          ) : (
            <Pressable
              onPress={next}
              className="h-16 w-16 rounded-full items-center justify-center border border-neutral-600 bg-black/60"
            >
              <ArrowRight color="#fff" size={22} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  )
}