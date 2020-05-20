import React from 'react';
import {
  View, Text, Button,
} from 'react-native';


const Feelings = ({ navigation }) => (
  <View>
    <Text>Feelings</Text>
    <Button title="My feeling" onPress={() => { navigation.navigate('MyFeeling'); }} />
  </View>
);

export default Feelings;
