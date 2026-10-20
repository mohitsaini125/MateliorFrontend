import { Image, Platform, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg"

const SERIF = Platform.select({ ios: "Georgia", android: "serif" })

function Scrim({ position }) {
  const stops =
    position === "top"
      ? [[0, 0.7], [0.45, 0], [0.82, 0], [1, 0.5]]
      : [[0, 0.5], [0.18, 0], [0.55, 0], [1, 0.8]]
  const id = `scrim-${position}`

  return (
    <View style={[StyleSheet.absoluteFill, { pointerEvents: "none" }]}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            {stops.map(([offset, opacity]) => (
              <Stop
                key={offset}
                offset={offset}
                stopColor="#000000"
                stopOpacity={opacity}
              />
            ))}
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </View>
  )
}

function CoverImage({ source, width, height, focusX = 0.5, focusY = 0.5 }) {
  const asset = Image.resolveAssetSource(source) || {}
  const imgW = asset.width || 853
  const imgH = asset.height || 1844

  const scale = Math.max(width / imgW, height / imgH)
  const w = imgW * scale
  const h = imgH * scale

  return (
    <Image
      source={source}
      resizeMode="stretch"
      style={{
        position: "absolute",
        width: w,
        height: h,
        left: -(w - width) * focusX,
        top: -(h - height) * focusY,
      }}
    />
  )
}

export default function RenderSlide({ item, width, height }) {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ width, height, backgroundColor: "#000", overflow: "hidden" }}>
      <CoverImage
        source={item.image}
        width={width}
        height={height}
        focusX={item.focusX}
        focusY={item.focusY}
      />
      <Scrim position={item.textPosition} />

      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 24,
        }}
      >
        {item.brand && (
          <View className="items-center mt-24">
            <Text
              className="text-white text-4xl"
              style={{ letterSpacing: 10, fontWeight: "300" }}
            >
              MATELIOR
            </Text>
            <Text
              className="text-neutral-400 text-xs mt-3"
              style={{ letterSpacing: 6 }}
            >
              FOR A SHARPER YOU
            </Text>
          </View>
        )}

        <View className={item.textPosition === "top" ? "mt-24" : "mt-auto mb-40"}>
          <Text
            className="text-white text-5xl"
            style={{ fontFamily: SERIF, lineHeight: 56 }}
          >
            {item.title}
          </Text>
          <Text className="text-gray-300 text-lg mt-4 w-4/5">
            {item.body}
          </Text>
        </View>
      </View>
    </View>
  )
}