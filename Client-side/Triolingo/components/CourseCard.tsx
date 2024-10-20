import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { FlagIcon } from "react-flag-kit";
import CircularProgress from 'react-native-circular-progress-indicator';
import 'react-circular-progressbar/dist/styles.css';
import { Root } from "@/constants/root.css";
import CountryFlag from "react-native-country-flag";

export default function CourseCard(props: any) {
    const percentage = Math.round((props.part/props.all)*100);
    const percentageTest = 40;
    return (
        <>
            <TouchableOpacity style={styles.container} 
                onPress={props.onPress}
            >
                <View style={Root.flex.row}>
                    {/* <View style={{width: 60, height: 60}}>
                        <CircularProgressbar 
                            value={percentage}
                            text={`${percentage}%`}
                            styles={pieStyle}
                        />
                        
                    </View> */}
                    <CircularProgress
                    
                            value={percentage}
                            progressValueStyle={{
                                padding: 0,
                                width: 'auto',
                                fontFamily: Root.fontStyle.semibold,
                            }}
                            valueSuffixStyle={{
                                padding: 0,
                            }}
                            radius={30}
                            maxValue={100}
                            activeStrokeColor={(percentage < 20) ? '#DFBF3C' : (percentage > 20 && percentage < 40) ? '#AEDF3C' : '#8EDF3C'}
                            inActiveStrokeColor={'#2ecc71'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#fff'}
                            valueSuffix={'%'}
                        />
                    <Text style={styles.text}>{props.title}</Text>
                </View>
                <CountryFlag 
                isoCode={props.flag} 
                size={25}
                style={styles.flagIcon}
                />
                    {/* <FlagIcon code={props.flag} style={styles.flagIcon} /> */}
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        // Add your styles here
        width: '100%',
        height: 80,
        backgroundColor: Root.primaryTheme.bgColor,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20,
        paddingHorizontal: 10,
        paddingRight: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: Root.fontStyle.regular,
        fontSize: Root.fontSize.medium,
        alignSelf: 'center',
    },
    text: {
        fontFamily: Root.fontStyle.medium,
        fontSize: Root.fontSize.large,
        color: '#fff',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        lineHeight: 20,
    },
    flagIcon: {
        // Add your styles here
        borderRadius: 5,
        borderWidth: 0,
        borderColor: '#000',
    },
    progressContainer: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressCircle: {
        height: 60,
        width: 60,
    },
    percentageText: {
        fontFamily: Root.fontStyle.regular,
        fontSize: Root.fontSize.medium,
    },
});
