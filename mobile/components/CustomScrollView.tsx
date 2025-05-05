import React from 'react';
import { ScrollView, View, StyleSheet, Image, ImageSourcePropType, Text } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

interface CustomScrollViewProps {
  children: React.ReactNode;
  headerImage?: ImageSourcePropType;
  headerTitle?: string;
}

const CustomScrollView: React.FC<CustomScrollViewProps> = ({ 
  children, 
  headerImage, 
  headerTitle 
}) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      {(headerImage || headerTitle) && (
        <View style={styles.header}>
          {headerImage && (
            <Image 
              source={headerImage} 
              style={styles.headerImage} 
              resizeMode="cover"
            />
          )}
          {headerTitle && (
            <View style={styles.headerTitleContainer}>
              <ThemedText type="title">{headerTitle}</ThemedText>
            </View>
          )}
        </View>
      )}
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // You may want to make this dynamic based on theme
  },
  header: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerTitleContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});

export default CustomScrollView;
