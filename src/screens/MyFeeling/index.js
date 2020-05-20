import React from 'react';
import { View, Text, Button } from 'react-native';

const MyFeeling = ({ navigation: { goBack } }) => (
  <View>
    <Text>MyFeeling</Text>
    <Button title="button" onPress={goBack} />
  </View>
);

export default MyFeeling;
