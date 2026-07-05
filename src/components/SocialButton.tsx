import { Pressable, Text } from "react-native";

type SocialButtonProps = {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
};

export function SocialButton({ label, icon, onPress }: SocialButtonProps) {
  return (
    <Pressable
      className="flex-row items-center justify-center gap-3 rounded-2xl border border-border py-3.5"
      onPress={onPress}
    >
      {icon}
      <Text className="button-text text-text-primary">{label}</Text>
    </Pressable>
  );
}
