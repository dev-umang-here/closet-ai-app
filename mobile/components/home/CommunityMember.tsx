import React from "react";
import { View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "./styles";

interface CommunityMemberProps {
  imageUrl: string;
  name: string;
}

export const CommunityMember: React.FC<CommunityMemberProps> = ({
  imageUrl,
  name,
}) => {
  return (
    <View style={styles.communityMember}>
      <Image source={{ uri: imageUrl }} style={styles.communityMemberImage} />
      <ThemedText type="default" style={styles.communityMemberName}>
        {name}
      </ThemedText>
    </View>
  );
};
