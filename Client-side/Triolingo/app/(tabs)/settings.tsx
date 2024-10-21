import { View, Text, StyleSheet } from 'react-native';
import '@/constants/root.css';
import CustomBtn from '@/components/CustomBtn';
import { useRouter } from 'expo-router';
export default function Tab() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <CustomBtn type={'green'} title={'Test'} onPress={() => {
          router.push({
              pathname: '../test',
          });
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
