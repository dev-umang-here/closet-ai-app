import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/08ae8286fa27bd0eac0d06294ab7cef2d674a5a2?placeholderIfAbsent=true",
          }}
          style={styles.profileImage}
        />
        <ThemedText type="title" style={styles.profileName}>
          Ankit
        </ThemedText>
        <ThemedText type="default" style={styles.profileLocation}>
          Bengaluru
        </ThemedText>

        <TouchableOpacity style={styles.editButton}>
          <ThemedText type="default" style={styles.editButtonText}>
            Edit Profile
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.statsContainer}>
        <StatItem title="Outfits" value="24" />
        <StatItem title="Items" value="48" />
        <StatItem title="Favorites" value="12" />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          Account Settings
        </ThemedText>

        <MenuOption title="Personal Information" />
        <MenuOption title="Notifications" />
        <MenuOption title="Privacy & Security" />
        <MenuOption title="Help & Support" />
        <MenuOption title="About" />
        <MenuOption title="Log Out" isLast={true} />
      </ThemedView>
    </ScrollView>
  );
}

function StatItem({ title, value }) {
  return (
    <View style={styles.statItem}>
      <ThemedText type="defaultSemiBold" style={styles.statValue}>
        {value}
      </ThemedText>
      <ThemedText type="default" style={styles.statTitle}>
        {title}
      </ThemedText>
    </View>
  );
}

function MenuOption({ title, isLast = false }) {
  return (
    <TouchableOpacity
      style={[styles.menuOption, isLast && styles.lastMenuOption]}
    >
      <ThemedText type="default">{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    width: "100%",
    padding: 20,
    paddingTop: 60,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    marginBottom: 4,
  },
  profileLocation: {
    opacity: 0.7,
    marginBottom: 16,
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 8,
  },
  editButtonText: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  section: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  menuOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  lastMenuOption: {
    borderBottomWidth: 0,
  },
});
