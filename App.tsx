import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './App.Styles';
import Timer from './src/Timer';

const App: React.FC = () => {
  const [timerModeValue, setTimerModeValue] = useState<'Focus' | 'Break'>('Focus');
  const getTimerModeValue = (e: 'Focus' | 'Break') => {
    setTimerModeValue(e);
  }
  return (
    <View
      style={{
        ...styles.container,
        ...{
          backgroundColor: timerModeValue === 'Break' ? '#84DCCF' : '#FAA381',
        },
      }}
    >
      <StatusBar style="auto" />
      <Timer timerModeValue={getTimerModeValue} />
    </View>
  )
}

export default App;