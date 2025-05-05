import React from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

// Import components
import { Header } from "@/components/home/Header";
import { ProfileTabs } from "@/components/home/ProfileTabs";
import { OutfitSection } from "@/components/home/OutfitSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PlannedLooksSection } from "@/components/home/PlannedLooksSection";
import { InviteFriendsSection } from "@/components/home/InviteFriendsSection";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={styles.container}>
      <Header />
      <ProfileTabs />
      <OutfitSection />
      <CommunitySection />
      <PlannedLooksSection />
      <InviteFriendsSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  bottomImage: {
    aspectRatio: 2,
    width: "100%",
    marginTop: 15,
  },
});
