import { View, Text } from 'react-native'
import React from 'react'
import styles from './Timer.Styles';

type Props = {
    timerDate: Date;
    
}

const TimerDisplayText: React.FC<Props> = ({timerDate }) => {
  return (
      <Text style={styles.timerCountDownText}>
        {timerDate.getUTCMinutes().toString().padStart(2, '0')}:
        {timerDate.getUTCSeconds().toString().padStart(2, '0')}
      </Text>
  )
}

export default TimerDisplayText