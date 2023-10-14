import { View, Text, Button, Pressable } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Timer.Styles';

type Props = {
  isTimerRunning: boolean,
  stopTimer: () => void,
  startTimer: () => void,
}

const TimerToggleButton:React.FC<Props> = ({isTimerRunning, stopTimer, startTimer}) => {
  return (
          <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
              <View style={styles.container}>
              <FontAwesome name={isTimerRunning ? 'pause' : 'play'} size={125} style={ styles.icon} />
              </View>
          </Pressable>
  )
}

export default TimerToggleButton