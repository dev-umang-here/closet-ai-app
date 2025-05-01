import React from "react";
import { View, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { CommunityMember } from "./CommunityMember";
import { styles } from "./styles";

export const CommunitySection: React.FC = () => {
  return (
    <ThemedView style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          Style your community
        </ThemedText>
        <ThemedText type="default" style={styles.sectionDescription}>
          Outfits for today's occasions
        </ThemedText>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#7C8DA6"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.communityMembers}>
        <CommunityMember
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a186b3859cf47d0010106f9d538f4114424b1a50?placeholderIfAbsent=true"
          name="Ankit"
        />
        <CommunityMember
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/943416c8773c00267329b703a3824048252ea301?placeholderIfAbsent=true"
          name="Gurminder"
        />
        <CommunityMember
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c316bc2408b33b99de85d4a3eebbecc1d4678a81?placeholderIfAbsent=true"
          name="Vedang"
        />
        <CommunityMember
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a568b57fda84052c9fcbe54cdf74eae988852a?placeholderIfAbsent=true"
          name="Khyati"
        />
        <CommunityMember
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4cd2a29db45e138ae2da37591596b2f0e4e6c920?placeholderIfAbsent=true"
          name="Abel"
        />
      </View>
    </ThemedView>
  );
};
