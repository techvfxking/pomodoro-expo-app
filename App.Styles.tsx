import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native'

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#FAA381',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles;
