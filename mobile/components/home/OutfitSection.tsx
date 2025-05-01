import React from "react";
import { View, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { OutfitItem } from "./OutfitItem";
import { styles } from "./styles";

export const OutfitSection: React.FC = () => {
  return (
    <ThemedView style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Today's Outfit
          </ThemedText>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c27b1c727acb41f45ca8042e6439ddd877c17efc?placeholderIfAbsent=true",
            }}
            style={styles.sectionIcon}
          />
        </View>
        <ThemedText type="default" style={styles.sectionDescription}>
          Your handpicked OOTD
        </ThemedText>
      </View>
      <View style={styles.outfitItems}>
        <OutfitItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae4ae3249e942373c0b92afce1fa8c8f6bf403e?placeholderIfAbsent=true"
          title="Black Jeans"
          brand="Nike"
        />
        <OutfitItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9e112a8ad22ebf96caddaa2d3b154c0734274e83?placeholderIfAbsent=true"
          title="Blue Shirt"
          brand="Adidas"
        />
        <OutfitItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ca73af6d3cf02bfee6b2b8567fe759ebd644d857?placeholderIfAbsent=true"
          title="White Shoes"
          brand="Puma"
        />
      </View>
    </ThemedView>
  );
};
