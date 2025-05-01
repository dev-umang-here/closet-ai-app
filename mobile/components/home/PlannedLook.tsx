import React from "react";
import { View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "./styles";

interface PlannedLookProps {
  imageUrl: string;
  title: string;
}

export const PlannedLook: React.FC<PlannedLookProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <View style={styles.plannedLook}>
      <Image source={{ uri: imageUrl }} style={styles.plannedLookImage} />
      <View style={styles.plannedLookDetails}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </View>
    </View>
  );
};
