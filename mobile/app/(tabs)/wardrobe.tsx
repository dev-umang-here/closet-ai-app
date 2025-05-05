import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function WardrobeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">My Wardrobe</ThemedText>
        <ThemedText type="default" style={styles.subtitle}>
          Manage your clothing items
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          Categories
        </ThemedText>

        <View style={styles.categoriesContainer}>
          <CategoryItem title="Tops" count={12} />
          <CategoryItem title="Bottoms" count={8} />
          <CategoryItem title="Shoes" count={6} />
          <CategoryItem title="Accessories" count={15} />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          Recently Added
        </ThemedText>

        <ThemedText type="default" style={styles.emptyState}>
          You haven't added any items recently.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

function CategoryItem({ title, count }) {
  return (
    <ThemedView style={styles.categoryItem}>
      <ThemedText type="defaultSemiBold">{title}</ThemedText>
      <ThemedText type="default" style={styles.categoryCount}>
        {count} items
      </ThemedText>
    </ThemedView>
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
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  },
  section: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: "48%",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  categoryCount: {
    marginTop: 8,
    fontSize: 12,
    opacity: 0.7,
  },
  emptyState: {
    textAlign: "center",
    padding: 20,
    opacity: 0.7,
  },
});
