import { StyleSheet } from "react-native";

export const Root = {
    primaryTheme:{
        bgColor: '#1F3F46',
        fontColorWhite: '#fff',
        fontColorBlack: '#000',
    },
    fontStyle:{
        thin: 'LeagueSpartan_100Thin',
        extraLight: 'LeagueSpartan_200ExtraLight',
        light: 'LeagueSpartan_300Light',
        regular: 'LeagueSpartan_400Regular',
        medium: 'LeagueSpartan_500Medium',
        semibold: 'LeagueSpartan_600SemiBold',
        bold: 'LeagueSpartan_700Bold',
        bolder: 'LeagueSpartan_800ExtraBold',
        black: 'LeagueSpartan_900Black',
    },
    fontSize:{
        extraSmall: 8,
        extraLarge: 24,
        huge: 32,
        small: 12,
        medium: 16,
        large: 20,
    },
    placeholderColor: '#BCBCBC',

    flex: StyleSheet.create({
        row: {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 20,
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 20,
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    }),
}