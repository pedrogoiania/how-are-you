import React from 'react';
import { View } from 'react-native';

import PrimaryText from '../../../../components/Texts/PrimaryText';

import styles from './styles';

import strings from '../../../../strings';

const FeelingDescription = ({ feeling }) => {
  const text = strings.im_feeling;
  const text2 = strings.choose_intensity;

  return (
    <View style={styles.feelingContainer}>
      <PrimaryText style={styles.feelingIcon}>{feeling.icon}</PrimaryText>
      <PrimaryText style={styles.feelingText}>{text}</PrimaryText>
      <PrimaryText style={styles.feelingValue}>{feeling.value}</PrimaryText>
      <PrimaryText style={styles.feelingMessage}>{text2}</PrimaryText>
    </View>
  );
};

export default FeelingDescription;
