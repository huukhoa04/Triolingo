
import CustomBtn from "@/components/CustomBtn";
import { Root } from "@/constants/root.css";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

export default function CourseIndex() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
             title: 'Browse courses',
             headerShown: true,
             headerTitleAlign: 'center',
             headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },

            });
      }, [navigation]);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={Root.flex.row}>
                <Text style={styles.title}>sample</Text>
                <CountryFlag isoCode={'jp'} size={45} style={styles.flag}/>
            </View>
            <Text style={{
                fontFamily: Root.fontStyle.semibold,
                fontSize: 26,
            }}>
                Rating: <Text style={{
                    fontFamily: Root.fontStyle.regular,
                    fontSize: 26,
                }}>
                    5/5
                </Text>
            </Text>
            <Text style={styles.description}>Hello</Text>
            <View style={styles.infoHolder}>
                <Text style={styles.label}>Created by: <Text style={styles.text}>1</Text></Text>
                <Text style={styles.label}>Number of quizzes: <Text style={styles.text}>1</Text></Text>
                <Text style={styles.label}>Date created: <Text style={styles.text}>2</Text></Text>
                <Text style={styles.label}>People joined this course: <Text style={styles.text}>3</Text></Text>
            </View>
            <View style={styles.button}>
            <CustomBtn 
                type={'green'}
                    title="Attend this course"
                    onPress={() => {
                        Alert.alert('Join Course', `Are you sure you want to join this course? ${id}`, [{
                            text: 'Yes',
                            onPress: () => {
                                Alert.alert('Success', 'You have successfully joined the course');
                
                            }
                        }, {
                            text: 'No',
                            onPress: () => {
                                Alert.alert('Cancelled', 'You have cancelled the course');
                            }
                        }]);
                    }}
                />
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {

        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: 20,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 40,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        color: '#000',
        alignSelf: 'center',
    },
    flag: {
        borderRadius: 5,
    },
    description: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 20,
        color: '#000',
        // alignSelf: 'center',
    },
    infoHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'center',
        // rowGap: 20,
        width: '100%',
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 18,
        fontFamily: Root.fontStyle.bold,
    },
    text: {
        fontSize: 18,
        fontFamily: Root.fontStyle.regular,
    },
    button: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 10,
    },
});