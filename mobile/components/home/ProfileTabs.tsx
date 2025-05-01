import React from "react";
import { TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "./styles";

export const ProfileTabs: React.FC = () => {
  return (
    <ThemedView style={styles.profileTabs}>
      <TouchableOpacity style={styles.activeTab}>
        <ThemedText type="defaultSemiBold" style={styles.activeTabText}>
          OOTD
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inactiveTab}>
        <ThemedText type="default">Stats</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};
