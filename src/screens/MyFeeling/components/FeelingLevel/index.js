import React from 'react';
import { View } from 'react-native';

import SecondaryButton from '../../../../components/Buttons/SecondaryButton';
import LevelSlider from '../../../../components/LevelSlider';

const FeelingLevel = ({ backButtonHandler }) => (
  <View style={{
    flex: 5,
    backgroundColor: 'rgb(119,75,227)',
  }}
  >

    <View>
      <LevelSlider />
    </View>

    <View style={{
      padding: 20, position: 'absolute', bottom: 20, width: '100%',
    }}
    >
      <SecondaryButton onPress={backButtonHandler} />
    </View>
  </View>
);

export default FeelingLevel;
