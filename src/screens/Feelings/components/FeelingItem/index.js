import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import PrimaryText from '../../../../components/Texts/PrimaryText';

import styles from './styles';

const FeelingItem = ({ icon, value, onPress }) => {
  const [dynamicWidth, setDynamicWidth] = useState(0);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { width } = layout;
    setDynamicWidth(width);
  };

  const handleOnPress = () => {
    const feeling = { icon, value };
    onPress(feeling);
  };

  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={handleOnPress}
      activeOpacity={0.6}
      style={[styles.itemContainer, {
        height: dynamicWidth,
        borderRadius: dynamicWidth / 2,
      }]}
    >
      <Text style={styles.itemIcon}>{icon}</Text>
      <PrimaryText style={styles.itemValue}>{value}</PrimaryText>
    </TouchableOpacity>
  );
};

export default FeelingItem;
