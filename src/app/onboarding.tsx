import { Stack, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

function SpeechBubble({
  text,
  textColorClassName,
  positionClassName,
}: {
  
  text: string;
  textColorClassName: string;
  positionClassName: string;
}) {
  return (
    <View className={`absolute rounded-2xl px-4 py-2 shadow-sm ${positionClassName}`}>
      <Text className={`body-md ${textColorClassName}`}>{text}</Text>
    </View>
  );
}

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 px-6">
        <View className="mt-4 flex-row items-center justify-center gap-2">
          <Image
            source={images.mascotLogo}
            style={{ width: 36, height: 36 }}
            resizeMode="contain"
          />
          <Text className="h2 text-text-primary">lingua</Text>
        </View>

        <View className="mt-10">
          <Text className="h1 text-text-primary">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="body-lg mt-3 text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="mt-6 flex-1 items-center justify-center">
          <View className="relative aspect-square w-full items-center justify-end">
            <SpeechBubble
              text="Hello!"
              textColorClassName="text-text-primary"
              positionClassName="left-[8%] top-[6%] bg-[#E9EDFB]"
            />
            <SpeechBubble
              text="¡Hola!"
              textColorClassName="text-lingua-purple"
              positionClassName="right-[8%] top-[2%] bg-[#E7E1FC]"
            />
            <SpeechBubble
              text="你好!"
              textColorClassName="text-[#E1523D]"
              positionClassName="right-[6%] top-[26%] bg-[#FBE4DC]"
            />
            <View style={{ width: "88%", aspectRatio: 1 }}>
              <Image
                source={images.mascotWelcome}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <Pressable
          className="mb-6 flex-row items-center justify-center rounded-full bg-lingua-deep-purple py-4"
          onPress={() => router.push("/sign-up")}
        >
          <Text className="button-text text-white">Get Started</Text>
          <Text className="button-text ml-2 text-white">›</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
