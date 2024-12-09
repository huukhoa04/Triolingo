import React, { useState } from 'react';
import { Root } from "@/constants/root.css";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

type LessonContainerProps = {
  lesson: {
    lessonNumber: number;
    lessonTitle: string;
    lessonPages: string;
    lessonUnits: Array<{
      unitUrl: string;
      unitTitle: string;
      unitContent: Array<{ character: string; meanings: string; readings?: string }>;
    }>;
    lessonUrl: string;
  };
};

const speakCharacter = (character: string) => {
  Speech.speak(character, {
    language: 'ja',
    pitch: 1,
    rate: 0.75,
  });
};

const LessonContainer: React.FC<LessonContainerProps> = ({ lesson }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVocab, setSelectedVocab] = useState<Array<{ character: string; meanings: string; readings?: string }>>([]);
  const route = useRouter();

  const openVocabModal = (unitContent: Array<{ character: string; meanings: string; readings?: string }>) => {
    setSelectedVocab(unitContent);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.lessonNumber}>lesson {lesson.lessonNumber}</Text>
        <Text style={styles.lessonTitle}>{lesson.lessonTitle}</Text>
        <Text style={styles.lessonPages}>{lesson.lessonPages}</Text>
      </View>

      <View style={styles.unitList}>
        {lesson.lessonUnits?.map((unit) => (
          <View key={unit.unitUrl} style={styles.unitLink}>
            <TouchableOpacity
              style={styles.unitTitleContainer}
              onPress={() => route.push(
                {
                  pathname: '/vocabquiz',
                  params: { unitWords: JSON.stringify({lessonUrl: lesson.lessonUrl, unitUrl: unit.unitUrl } ) }
                 } )
            }
            >
              <Text style={styles.unitTitle}>{unit.unitTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openVocabModal(unit.unitContent)}
            >
              <FontAwesome name="book" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Vocabulary</Text>
          <FlatList
            data={selectedVocab}
            renderItem={({ item }) => (
              <View style={styles.vocabItem}>
                <TouchableOpacity onPress={() => speakCharacter(item.character)}>
                  <Text style={styles.character}>{item.character}</Text>
                </TouchableOpacity>
                {/* Conditional rendering based on the availability of meanings or readings */}
                <Text style={styles.meaning}>
                  {item.meanings ? item.meanings : item.readings || 'No meaning or reading available'}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Root.primaryTheme.bgColor,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    marginBottom: 16,
  },
  lessonNumber: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    opacity: 0.8,
    fontSize: 14,
  },
  lessonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  lessonPages: {
    color: 'white',
    fontWeight: 'bold',
    opacity: 0.8,
    fontSize: 16,
  },
  unitList: {
    marginTop: 16,
  },
  unitLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unitTitleContainer: {
    flex: 1,
  },
  unitTitle: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Root.primaryTheme.bgColor,
    padding: 20,
  },
  modalTitle: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  vocabItem: {
    marginBottom: 12,
  },
  character: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  meaning: {
    fontSize: 16,
    color: 'lightgray',
  },
  closeButton: {
    backgroundColor: '1F3F46',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LessonContainer;
