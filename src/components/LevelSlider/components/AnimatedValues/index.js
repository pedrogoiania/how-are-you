import React, { useState } from 'react';
import { View } from 'react-native';
import AnimatedValueItem from './AnimatedValueItem';

const renderValues = (
  values,
  defaultVerticalPosition,
  selectedPositionValue,
  valueColor,
  direction,
  valueWrapperStyle,
) => values.map(
  (item) => (
    <AnimatedValueItem
      key={item}
      value={item}
      defaultVerticalPosition={defaultVerticalPosition}
      selectedPositionValue={selectedPositionValue}
      valueColor={valueColor}
      direction={direction}
      valueWrapperStyle={valueWrapperStyle}
    />
  ),
);

const AnimatedValues = ({
  values,
  defaultVerticalPosition,
  selectedPositionValue,
  valueColor,
  direction,
  valueWrapperStyle,
}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    {renderValues(
      values,
      defaultVerticalPosition,
      selectedPositionValue,
      valueColor,
      direction,
      valueWrapperStyle,
    )}
  </View>
);

export default AnimatedValues;
