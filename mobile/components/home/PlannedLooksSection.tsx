import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { PlannedLook } from "./PlannedLook";
import { styles } from "./styles";

export const PlannedLooksSection: React.FC = () => {
  return (
    <ThemedView style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Planned Looks
          </ThemedText>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c27b1c727acb41f45ca8042e6439ddd877c17efc?placeholderIfAbsent=true",
            }}
            style={styles.sectionIcon}
          />
        </View>
        <ThemedText type="default" style={styles.sectionDescription}>
          Outfits for today's occasions
        </ThemedText>
      </View>
      <View style={styles.plannedLooks}>
        <PlannedLook
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/00a14e064d18b1d83eaedbd2fce6e63738074113?placeholderIfAbsent=true"
          title="Office"
        />
        <PlannedLook
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9d43430d9f511ae304c68fdcaad694c663664ae9?placeholderIfAbsent=true"
          title="Gym"
        />
        <PlannedLook
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a6512f6d008b251ed3bb1d453fea448921d8d9c5?placeholderIfAbsent=true"
          title="Dates"
        />
      </View>
      <TouchableOpacity style={styles.createButton}>
        <ThemedText type="default" style={styles.createButtonText}>
          Create
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};
