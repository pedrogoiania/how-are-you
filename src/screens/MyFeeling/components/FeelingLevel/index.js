import React from 'react';
import { View } from 'react-native';

import SecondaryButton from '../../../../components/Buttons/SecondaryButton';
import LevelSlider from '../../../../components/LevelSlider';

import styles from './styles';

const FeelingLevel = ({ backButtonHandler }) => (
  <View style={styles.feelingLevelContainer}>

    <View>
      <LevelSlider />
    </View>

    <View style={styles.buttonContainer}>
      <SecondaryButton onPress={backButtonHandler} />
    </View>
  </View>
);

export default FeelingLevel;
