import React from 'react';
import { View } from 'react-native';
import ValueDescriptionItem from './ValueDescriptionItem';

const values = [
  'Slightily',
  'A little',
  'Fairly',
  'Very',
  'Extremely',
];

const renderValues = () => values.map((item) => (<ValueDescriptionItem key={item} value={item} />));

const ValuesDescriptions = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
  >
    {renderValues()}
  </View>
);

export default ValuesDescriptions;
