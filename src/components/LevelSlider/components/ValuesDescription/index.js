import React from 'react';
import { View, Text } from 'react-native';


const ValuesDescriptions = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
  >
    <View style={{ justifyContent: 'center' }}>
      <Text>Slightily</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text>A little</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text>Fairly</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text>Very</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text>Extremely</Text>
    </View>
  </View>
);

export default ValuesDescriptions;
