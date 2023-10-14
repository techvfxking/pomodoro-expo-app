import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native'

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: '#d95550',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
