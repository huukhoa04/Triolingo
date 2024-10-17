import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { FlagIcon } from "react-flag-kit";
import 'react-circular-progressbar/dist/styles.css';
import { Root } from "@/constants/root.css";
export default function CourseCard(props: any) {
    const percentage = Math.round((props.part/props.all)*100);
    const percentageTest = 40;
    const pieStyle = buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        // rotation: 0.25,
    
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
    
        // Text size
        textSize: '24px',
    
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
    
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
    
        // Colors
        pathColor: (percentage < 20) ? '#DFBF3C' : (percentage > 20 && percentage < 40) ? '#AEDF3C' : '#8EDF3C',
        textColor: '#fff',
        trailColor: 'transparent',
        backgroundColor: '#000',
        
    }) as any;
    return (
        <>
            <TouchableOpacity style={styles.container} 
                onPress={props.onPress}
            >
                <View style={Root.flex.row}>
                    <View style={{width: 60, height: 60}}>
                        <CircularProgressbar 
                        value={percentage}
                        text={`${percentage}%`}
                        styles={pieStyle}
                        />
                    </View>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
                    <FlagIcon code={props.flag} style={styles.flagIcon} />
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        // Add your styles here
        width: 400,
        height: 80,
        backgroundColor: Root.primaryTheme.bgColor,
        shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        paddingHorizontal: 10,
        paddingRight: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: Root.fontStyle.regular,
        fontSize: Root.fontSize.medium,

    },
    text: {
        fontFamily: Root.fontStyle.medium,
        fontSize: Root.fontSize.large,
        color: '#fff',
        alignSelf: 'center',
    },
    flagIcon: {
        // Add your styles here
        width: 35,
        height: 35*11/16,
        borderRadius: 5,
    },
});
