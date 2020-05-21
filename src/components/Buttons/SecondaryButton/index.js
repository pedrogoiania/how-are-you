import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const SecondaryButton = ({ onPress }) => {
  console.log('button');

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'rgb(133,88,244)',
            textTransform: 'uppercase',
            fontSize: 12,
          }}
        >
          Next

        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
