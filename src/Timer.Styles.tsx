import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  timerCountDownText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  icon: {
    alignSelf: 'center',
    color: '#ffffff',
  },
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    borderColor: '#fff',
    marginVertical: 50,
    },
    timerMode: {
        textAlign: 'center',
        alignItems: 'center',
        margin:'auto',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffff'
  }
})

export default styles
