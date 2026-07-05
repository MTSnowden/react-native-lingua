import { Text, TextInput, TextInputProps, View } from "react-native";

import { colors } from "@/constants/theme";

type AuthTextFieldProps = TextInputProps & {
  label: string;
  rightAccessory?: React.ReactNode;
};

export function AuthTextField({ label, rightAccessory, ...inputProps }: AuthTextFieldProps) {
  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-border px-4 py-3">
      <View className="flex-1">
        <Text className="body-sm text-text-secondary">{label}</Text>
        <TextInput
          className="body-lg mt-1 text-text-primary"
          placeholderTextColor={colors.neutral.textSecondary}
          style={{ padding: 0 }}
          {...inputProps}
        />
      </View>
      {rightAccessory}
    </View>
  );
}
