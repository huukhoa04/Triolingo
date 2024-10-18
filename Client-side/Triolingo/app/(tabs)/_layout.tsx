import { Root } from '@/constants/root.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { View } from 'react-native';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
    headerStyle: {
      backgroundColor: Root.primaryTheme.bgColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: Root.fontStyle.semibold,
      fontSize: Root.fontSize.large,
    }, 

    tabBarShowLabel: false,

    tabBarStyle: {
      backgroundColor: Root.primaryTheme.bgColor,
    },
    tabBarActiveTintColor: ('#00F17E'), // Use a solid color for active tint
    tabBarInactiveTintColor: '#fff',
    tabBarLabelStyle: {
      fontFamily: Root.fontStyle.semibold,
    }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Your courses',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name='attendedcourse'
        options={
          {
            title: 'Attended courses',
            headerShown: true,
            href: null,
          }
        }
      />
      <Tabs.Screen
        name="characters"
        options={{
          headerShown: true,
          title: 'Hiragana',
          tabBarIcon: ({ color }) => 
              <Text style={{
              marginBottom: 5,
              color: color,
              fontSize: 25,
              fontFamily: Root.fontStyle.bolder,
              fontWeight: 'bold',
            }}>あ</Text>
          ,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null,
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="usermenu"
        options={{
          headerShown: false,
          title: 'User',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newcourse"
        options={{
          href: null,
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          }
        }}
      />
    </Tabs>
  );
}
