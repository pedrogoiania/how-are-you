import React from 'react';
import { View, Text } from 'react-native';

const FeelingDescription = ({ feeling }) => {
  const text = 'I\'m feeling';
  const text2 = 'Choose the intensity of your feeling';

  return (
    <View style={{
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
    >
      <Text style={{ fontSize: 40 }}>{feeling.icon}</Text>
      <Text style={{ fontSize: 40 }}>{text}</Text>
      <Text style={{ fontSize: 40, color: 'rgb(133,88,244)' }}>{feeling.value}</Text>
      <Text style={{ paddingVertical: 20, color: 'gray' }}>{text2}</Text>
    </View>
  );
};

export default FeelingDescription;
