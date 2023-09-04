import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


 

const App = () => {
  const [age, setAge] = useState('');
  const [targetHeartRate, setTargetHeartRate] = useState('');

  const calcHeartRate = (newAge) => {
    const ageNumber = parseInt(newAge, 10);
    const maxHR = 220 - ageNumber;
    const targetHRmin = Math.round(maxHR * 0.6);
    const targetHRmax = Math.round(maxHR * 0.8);

    setTargetHeartRate(`${targetHRmin}-${targetHRmax}`);
  };


  
  return (
    <View style={styles.container}>
      <Text>Age :</Text>
      <TextInput
        placeholder="How old are you?"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => {
          setAge(text);
          calcHeartRate(text);
        }}
      />
      <Text>{targetHeartRate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;