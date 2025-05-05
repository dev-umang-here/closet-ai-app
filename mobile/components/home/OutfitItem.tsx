import React from "react";
import { View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "./styles";

interface OutfitItemProps {
  imageUrl: string;
  title: string;
  brand: string;
}

export const OutfitItem: React.FC<OutfitItemProps> = ({
  imageUrl,
  title,
  brand,
}) => {
  return (
    <View style={styles.outfitItem}>
      <Image source={{ uri: imageUrl }} style={styles.outfitItemImage} />
      <View style={styles.outfitItemDetails}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <ThemedText type="default" style={styles.brandText}>
          {brand}
        </ThemedText>
      </View>
    </View>
  );
};
