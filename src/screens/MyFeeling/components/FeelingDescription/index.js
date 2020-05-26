import React from 'react';
import { View } from 'react-native';

import PrimaryText from '../../../../components/Texts/PrimaryText';

import styles from './styles';

const FeelingDescription = ({ feeling }) => {
  const text = 'I\'m feeling';
  const text2 = 'Choose the intensity of your feeling';

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
