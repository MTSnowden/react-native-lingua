import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="h1 mt-90 text-center color-lingua-purple">lingua</Text>
        <Link href="/onboarding" className="body-lg mt-6 text-lingua-purple">
          Go to onboarding
        </Link>
      </View>
    </SafeAreaView>
  );
}
