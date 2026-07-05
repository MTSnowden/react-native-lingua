import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthForm } from "@/components/AuthForm";
import { colors } from "@/constants/theme";

export default function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <AuthForm
        title="Create your account"
        subtitle="Start your language journey today ✨"
        submitLabel="Sign Up"
        showPassword
        footerText="Already have an account?"
        footerLinkLabel="Log in"
        footerLinkHref="/sign-in"
      />
    </SafeAreaView>
  );
}
