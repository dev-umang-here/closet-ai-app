import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "./styles";

export const InviteFriendsSection: React.FC = () => {
  return (
    <ThemedView style={[styles.sectionContainer, localStyles.rowContainer]}>
      <View style={styles.inviteImageContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf15f89544d3148433bb54c437f97a4256fa7f7c?placeholderIfAbsent=true",
          }}
          style={styles.inviteImage}
        />
      </View>
      <View style={styles.inviteContent}>
        <View style={styles.inviteTextContainer}>
          <ThemedText type="defaultSemiBold" style={styles.inviteTitle}>
            Style your friends!
          </ThemedText>
          <ThemedText type="default" style={styles.inviteDescription}>
            Invite your friends and get new style inspirations and access to
            exclusive events!
          </ThemedText>
        </View>
        <View style={styles.usernameContainer}>
          <View style={styles.username}>
            <ThemedText type="default">@anky</ThemedText>
          </View>
          <ThemedText type="default" style={styles.usernameDescription}>
            Your username
          </ThemedText>
        </View>
        <View style={styles.socialMediaIcons}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e9cbf786d5dad35cf977ed1eecb7427d76beca4?placeholderIfAbsent=true",
            }}
            style={styles.socialIcon}
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/18e02501aa4263f0165d6da1b4ef6f42de0fd022?placeholderIfAbsent=true",
            }}
            style={styles.socialIcon}
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e03f9e0a2170b7b5919a14d641336699d8319b6?placeholderIfAbsent=true",
            }}
            style={styles.socialIcon}
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1561747ab0ab6192f5311b7bd47722375e6d73d?placeholderIfAbsent=true",
            }}
            style={styles.socialIcon}
          />
        </View>
      </View>
    </ThemedView>
  );
};

// Local styles for row layout
const localStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
