import { Ionicons } from "@expo/vector-icons";
import { Href, Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { AuthTextField } from "@/components/AuthTextField";
import { GradientButton } from "@/components/GradientButton";
import { SocialButton } from "@/components/SocialButton";
import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

type AuthFormProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
  showPassword: boolean;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: Href;
};

export function AuthForm({
  title,
  subtitle,
  submitLabel,
  showPassword,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [error, setError] = useState("");
  const VERIFICATION_CODE_LENGTH = 6;

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function handleSubmit() {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (showPassword && password.trim().length === 0) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setVerificationVisible(true);
  }

  function handleVerified(code: string) {
    if (code.length !== VERIFICATION_CODE_LENGTH) {
      return;
    }

    setVerificationVisible(false);
    router.replace("/");
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <Pressable
            className="mt-2 h-10 w-10 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={colors.neutral.textPrimary}
            />
          </Pressable>

          <Text className="h1 mt-2 text-text-primary">{title}</Text>
          <Text className="body-lg mt-2 text-text-secondary">{subtitle}</Text>

          <View className="mt-4 items-center">
            <Image
              source={images.mascotAuth}
              style={{ width: 220, height: 190 }}
              resizeMode="contain"
            />
          </View>

          <View className="gap-4">
            <AuthTextField
              label="Email"
              placeholder="alex@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {showPassword && (
              <AuthTextField
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
                rightAccessory={
                  <Pressable
                    onPress={() => setPasswordVisible((prev) => !prev)}
                    hitSlop={8}
                  >
                    <Ionicons
                      name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color={colors.neutral.textSecondary}
                    />
                  </Pressable>
                }
              />
            )}
            {error ? (
              <Text
                className="body-sm mt-2"
                style={{ color: colors.semantic.error }}
              >
                {error}
              </Text>
            ) : null}
          </View>

          <View className="mt-6">
            <GradientButton label={submitLabel} onPress={handleSubmit} />
          </View>

          <View className="mt-6 flex-row items-center gap-3">
            <View className="h-px flex-1 bg-border" />
            <Text className="body-sm text-text-secondary">
              or continue with
            </Text>
            <View className="h-px flex-1 bg-border" />
          </View>

          <View className="mt-6 gap-3">
            <SocialButton
              label="Continue with Google"
              icon={
                <Ionicons
                  name="logo-google"
                  size={20}
                  color={colors.neutral.textPrimary}
                />
              }
              onPress={() => {}}
            />
            <SocialButton
              label="Continue with Facebook"
              icon={<Ionicons name="logo-facebook" size={20} color="#1877F2" />}
              onPress={() => {}}
            />
            <SocialButton
              label="Continue with Apple"
              icon={
                <Ionicons
                  name="logo-apple"
                  size={20}
                  color={colors.neutral.textPrimary}
                />
              }
              onPress={() => {}}
            />
          </View>

          <View className="mt-auto flex-row items-center justify-center gap-1 pb-6 pt-8">
            <Text className="body-md text-text-secondary">{footerText}</Text>
            <Link
              href={footerLinkHref}
              replace
              className="body-md text-lingua-purple"
            >
              {footerLinkLabel}
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={verificationVisible}
        email={email || "your email"}
        onClose={() => setVerificationVisible(false)}
        onComplete={handleVerified}
      />
    </>
  );
}
