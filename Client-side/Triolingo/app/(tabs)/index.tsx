import CourseCard from '@/components/CourseCard';
import IconBtn from '@/components/IconBtn';
import { ButtonStyle } from '@/constants/ButtonTheme';
import { Root } from '@/constants/root.css';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>In progress</Text>
      <CourseCard part={1} all={30} title={'simple card'} flag={'jp'}
                onPress={() => {

                }} 
      />
      <Text style={styles.label}>In progress</Text>
      <IconBtn name={'plus'} style={{
        position: "absolute",
        display: "flex",
        // alignItems: "center",
        backgroundColor: ButtonStyle.green.backgroundColor,
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        right: 10,
        bottom: 10,
        shadowColor: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }} 
        onPress={() => {
          console.log('add button clicked');
          router.push({
            pathname: './newcourse',
          });
        }}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexBasis: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 10,
    rowGap: 10,
  },
  label: {
    fontSize: 30,
    fontFamily: Root.fontStyle.medium,
    marginBottom: 5,
    marginLeft: 15,
  }
});
