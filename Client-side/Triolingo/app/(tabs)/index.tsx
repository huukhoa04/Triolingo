import CourseCard from '@/components/CourseCard';
import IconBtn from '@/components/IconBtn';
import { ButtonStyle } from '@/constants/ButtonTheme';
import { Root } from '@/constants/root.css';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Tab() {
  const router = useRouter();
  const params1 = {
    title: 'simple card',
    flag: 'jp',
    description: 'This is a simple card for testing purposes. It is used to test the CourseCard component.',
    dateAttended: '2021-10-10',
    timeLearned: 15,
    corrected: 15,
    total: 30,
  }
  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>In progress</Text>
      <CourseCard part={15} all={30} title={'simple card'} flag={'jp'}
                onPress={() => {
                    router.push({
                      pathname: './attendedcourse',
                      params: params1,
                    });
                }} 
      />
      
      <Text style={styles.label}>Done</Text>
      <CourseCard part={30} all={30} title={'simple card'} flag={'jp'}
                onPress={() => {

                }} 
      />
      







      
    </ScrollView>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
