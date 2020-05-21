import React from 'react';
import { View, Text } from 'react-native';

const ValueDescriptionItem = ({ value }) => (
  <View style={{ alignItems: 'center', top: -70 }}>
    <Text style={{ color: 'white' }}>{value}</Text>
  </View>
);

export default ValueDescriptionItem;
