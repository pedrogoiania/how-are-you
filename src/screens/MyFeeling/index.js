import React from 'react';
import { View } from 'react-native';
import FeelingDescription from './components/FeelingDescription';
import FeelingLevel from './components/FeelingLevel';

const MyFeeling = ({ route: { params }, navigation: { goBack } }) => {
  const { feeling } = params;
  return (
    <View style={{ flex: 1 }}>
      <FeelingDescription feeling={feeling} />
      <FeelingLevel backButtonHandler={goBack} />
    </View>


  );
};

export default MyFeeling;
