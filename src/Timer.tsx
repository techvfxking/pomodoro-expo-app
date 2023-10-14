import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './Timer.Styles';
import TimerDisplayText from './TimerDisplayText';
import TimerToggleButton from './TimerToggleButton';

type Props = {
  timerModeValue: (e: 'Focus' | 'Break') => void
}

const Timer: React.FC<Props> = (props) => {

  const FOCUS_TIME_MINUTES = 25 * 60 * 1000
  const BREAK_TIME_MINUTES = 5 * 60 * 1000

  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<'Focus' | 'Break'>("Focus");

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === 'Focus') {
        setTimerMode('Break');
        setTimerCount(BREAK_TIME_MINUTES);
        props.timerModeValue('Break');
      } else {
        setTimerMode('Focus')
        setTimerCount(FOCUS_TIME_MINUTES);
        props.timerModeValue('Focus')
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000)
    setTimerInterval(id)
  }

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval)
    }
    setIsTimerRunning(false);
  }

  const timerDate = new Date(timerCount)

  return (
    <>
      <Text style={styles.timerMode}>{timerMode} Time { timerMode === 'Focus' ? '🍅':'🥦'}</Text>
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
      <TimerDisplayText timerDate={timerDate} />
    </>
  )
}

export default Timer
