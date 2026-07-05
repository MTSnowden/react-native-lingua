import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text } from "react-native";

import { colors } from "@/constants/theme";

type GradientButtonProps = {
  label: string;
  onPress: () => void;
};

export function GradientButton({ label, onPress }: GradientButtonProps) {
  return (
    <Pressable className="overflow-hidden rounded-full" onPress={onPress}>
      <LinearGradient
        colors={[colors.brand.deepPurple, colors.brand.purple]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ paddingVertical: 16, alignItems: "center" }}
      >
        <Text className="button-text text-white">{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
