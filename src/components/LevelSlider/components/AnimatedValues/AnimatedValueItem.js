import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { LevelSliderContext } from '../../contexts/LevelSlider/LevelSliderState';

const AnimatedValue = ({
  value,
  defaultVerticalPosition,
  selectedPositionValue,
  valueColor,
  direction,
  valueWrapperStyle,
}) => {
  const { state: { sliderPosition } } = useContext(LevelSliderContext);
  const [horizontalPosition, setHorizontalPosition] = useState({ x0: value, x1: value });
  const [verticalPosition, setVerticalPosition] = useState(defaultVerticalPosition);

  const verifySliderInsideValue = () => {
    const { x0, x1 } = horizontalPosition;

    if (sliderPosition >= x0 && sliderPosition <= x1) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const sliderInsideItem = verifySliderInsideValue();

    let positionToTest = verticalPosition;
    let defaultVerticalPositionToTest = defaultVerticalPosition;

    if (direction === 'up') {
      if (positionToTest < 0) {
        positionToTest *= -1;
      }

      if (defaultVerticalPositionToTest < 0) {
        defaultVerticalPositionToTest *= -1;
      }
    }

    if (positionToTest === defaultVerticalPositionToTest && sliderInsideItem) {
      setVerticalPosition(selectedPositionValue);
    }

    if (positionToTest > defaultVerticalPositionToTest && !sliderInsideItem) {
      setVerticalPosition(defaultVerticalPosition);
    }
  }, [sliderPosition]);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { x, width } = layout;

    const horizontalPositionValue = {
      x0: x,
      x1: x + width,
    };

    setHorizontalPosition(horizontalPositionValue);
  };

  return (
    <View
      onLayout={onLayout}
      style={[{
        alignItems: 'center',
        top: verticalPosition,
      }, valueWrapperStyle]}
    >
      <Text style={{ color: valueColor }}>{value}</Text>
    </View>
  );
};

export default AnimatedValue;
