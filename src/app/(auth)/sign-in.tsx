import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthForm } from "@/components/AuthForm";
import { colors } from "@/constants/theme";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <AuthForm
        title="Welcome back"
        subtitle="Continue your language journey ✨"
        submitLabel="Log in"
        showPassword={false}
        footerText="Don't have an account?"
        footerLinkLabel="Sign up"
        footerLinkHref="/sign-up"
      />
    </SafeAreaView>
  );
}
