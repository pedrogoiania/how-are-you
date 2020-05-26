import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import PrimaryText from '../../Texts/PrimaryText';

import styles from './styles';

const SecondaryButton = ({ onPress }) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <View style={styles.buttonContainer}>
      <PrimaryText style={styles.buttonText}>Next</PrimaryText>
    </View>
  </TouchableOpacity>
);

export default SecondaryButton;
