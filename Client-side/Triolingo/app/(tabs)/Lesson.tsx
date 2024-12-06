import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { LessonContainer } from '../../components/alphabet';
import { lessonData } from '../../data';

const Lessons = () => {
  const navigation = useNavigation();
  // Lấy dữ liệu người dùng từ server
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  return (
    <ScrollView style={styles.container}>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerHeading}>Welcome {user.username}!</Text>
        <Text style={styles.bannerText}>Your adventure begins here</Text>
      </View>

      {/* Description */}
      <View style={styles.description}>
        <Text>
          These quizzes are intended to aid you in practicing the material you've learned in each lesson of{' '}
          <Text style={styles.boldText}>Genki: An Integrated Course in Elementary Japanese textbooks (Third Edition)</Text>.
        </Text>
        <Text style={{ marginTop: 10 }}>Select an exercise from a lesson to begin a quiz.</Text>
      </View>

      {/* Lessons */}
      <View style={styles.lessonList}>
        {lessonData.map((lesson) => (
          <LessonContainer key={lesson.lessonUrl} lesson={lesson} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Lessons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  banner: {
    padding: 16,
    backgroundColor: '#1E3A8A', 
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  bannerHeading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
  },
  description: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  lessonList: {
    marginTop: 16,
  },
});
