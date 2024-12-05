import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import Auth from '@/utils/auth';
import { useFocusEffect } from 'expo-router';

interface User {
  username: string;

  experience: number;
}

const Leaderboards = () => {
  const navigation = useNavigation();

  // If the user is not logged in, navigate to the login screen
  // Fetch user data from the server
  const { loading, data } = useQuery<{ users: User[] }>(QUERY_USERS);
  const [users, setUser] = useState<User[]>([]);
  useFocusEffect(
    React.useCallback(() => {
      if(data){
        setUser(data.users.reduce((acc: any, user: any) => {
          const index = acc.findIndex((u: any) => u.experience < user.experience);
          if (index === -1) {
            acc.push(user);
          } else {
            acc.splice(index, 0, user);
          }
          return acc;
        }, []));
      
      }
    }, [data])
  )

  // Ranking styling logic
  const rankStyle = (index: number) => {
    switch (index) {
      case 0:
        return styles.firstRank;
      case 1:
        return styles.secondRank;
      case 2:
        return styles.thirdRank;
      default:
        return styles.defaultRank;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Page Heading */}
      <Text style={styles.heading}>Leaderboards</Text>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerHeading}>Rise to the top!</Text>
        <Text style={styles.bannerText}>Be the best and compete with others.</Text>
      </View>

      {/* Leaderboard list */}
      <View style={styles.leaderboardContainer}>
        <Text style={styles.rankingsHeading}>Rankings</Text>

        {/* Loading indicator */}
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" style={styles.loadingIndicator} />
        ) : (
          users.map((user, index) => (
            <View key={user.username} style={styles.userContainer}>
              <Text style={[styles.rankText, rankStyle(index)]}>{index + 1}</Text>
              <View style={styles.userIcon}>
                <Text style={styles.userIconText}>{user.username.charAt(0).toUpperCase()}</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.username} numberOfLines={1}>{user.username}</Text>
                <Text style={styles.experience} numberOfLines={1}>{user.experience} XP</Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Leaderboards;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  banner: {
    padding: 20,
    backgroundColor: '#006400',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  bannerHeading: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bannerText: {
    color: 'white',
    fontSize: 16,
  },
  leaderboardContainer: {
    padding: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
  },
  rankingsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#333333',
    marginBottom: 8,
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
    color: 'white',
  },
  firstRank: {
    color: '#FFD700',
  },
  secondRank: {
    color: '#C0C0C0',
  },
  thirdRank: {
    color: '#CD7F32',
  },
  defaultRank: {
    color: 'white',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00cc66',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userIconText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  experience: {
    fontSize: 14,
    color: '#888888',
  },
});
