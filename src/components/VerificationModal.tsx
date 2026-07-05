import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Modal, Platform, Pressable, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/theme";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
  onComplete: (code: string) => void;
};

export function VerificationModal({ visible, email, onClose, onComplete }: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => inputRef.current?.focus(), 300);
    return () => clearTimeout(timeout);
  }, [visible]);

  function handleChange(text: string) {
    const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digits);
    if (digits.length === CODE_LENGTH) {
      onComplete(digits);
      setCode("");
    }
  }

  function handleClose() {
    setCode("");
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <Pressable className="flex-1 bg-black/40" onPress={handleClose} />

        <View className="rounded-t-3xl bg-background px-6 pb-10 pt-6">
          <View className="mb-4 h-1.5 w-10 self-center rounded-full bg-border" />

          <View className="flex-row items-start justify-between">
            <View className="flex-1 pr-4">
              <Text className="h2 text-text-primary">Check your email</Text>
              <Text className="body-md mt-2 text-text-secondary">
                We sent a 6-digit code to {email}. Enter it below to continue.
              </Text>
            </View>
            <Pressable onPress={handleClose} hitSlop={8}>
              <Ionicons name="close" size={24} color={colors.neutral.textSecondary} />
            </Pressable>
          </View>

          <Pressable className="mt-6 flex-row justify-between" onPress={() => inputRef.current?.focus()}>
            {Array.from({ length: CODE_LENGTH }).map((_, index) => (
              <View
                key={index}
                className={`h-14 w-12 items-center justify-center rounded-2xl border ${
                  index === code.length ? "border-lingua-purple" : "border-border"
                }`}
              >
                <Text className="h3 text-text-primary">{code[index] ?? ""}</Text>
              </View>
            ))}
          </Pressable>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            style={{ position: "absolute", height: 1, width: 1, opacity: 0 }}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
