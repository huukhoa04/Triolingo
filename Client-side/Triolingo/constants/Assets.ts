import { StyleSheet } from "react-native";


export const Assets = {
    logo: require('@/assets/images/logo.png'),
    logo2x: require('@/assets/images/logo2x.png'),
    sampleAvatar: require('@/assets/images/sampleAvatar.jpg'),
    logocss : StyleSheet.create({
        align: {
            alignSelf: 'center',
            padding: 20,
        }
    }),
    avatarcss: StyleSheet.create({
        align: {
            alignSelf: 'center',
            padding: 20,
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 4,
            borderColor: '#fff',
        }
    }),
    testAudioPath: require('@/assets/audio/test/boom.mp3'),
    completeBg: require('@/assets/images/QuizzesCompleted.jpg'),
}