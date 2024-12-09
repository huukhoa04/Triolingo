import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface UnitContent {
  character: string;
  meanings?: string;  // Optional meanings
  readings?: string;  // Optional readings
}

interface VocabContainerProps {
  lesson: {
    unitTitle: string;
    unitUrl: string;
    unitContent: UnitContent[];
  };
}

const VocabContainer: React.FC<VocabContainerProps> = ({ lesson }) => {
  // Render each vocabulary item in a FlatList for better performance
  const renderItem = ({ item }: { item: UnitContent }) => (
    <View style={styles.vocabItem}>
      <Text>{item.character}</Text>
      {/* Display either meanings or readings */}
      <Text>{item.meanings || item.readings}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.unitTitle}</Text>
      {/* Use FlatList for rendering vocabulary items */}
      <FlatList
        data={lesson.unitContent}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  vocabItem: {
    marginTop: 8,
  },
});

export default VocabContainer;
