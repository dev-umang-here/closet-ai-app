import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "./styles";
import { useColorScheme } from "@/hooks/useColorScheme";

export const Header: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <ThemedText type="title">Stealth</ThemedText>
        </View>
        <View style={styles.headerIcons}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/acca0576f58c170a9d42a5b2d43a84530a5a88dd?placeholderIfAbsent=true",
            }}
            style={styles.headerIcon}
          />
        </View>
      </View>
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeMessage}>
          <View style={styles.welcomeDetails}>
            <View style={styles.welcomeText}>
              <ThemedText type="title">
                Welcome home, {"\n"}
                <ThemedText type="defaultSemiBold">Ankit</ThemedText>
              </ThemedText>
            </View>
            <TouchableOpacity>
              <ThemedText type="default">Bengaluru</ThemedText>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/08ae8286fa27bd0eac0d06294ab7cef2d674a5a2?placeholderIfAbsent=true",
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
    </ThemedView>
  );
};
