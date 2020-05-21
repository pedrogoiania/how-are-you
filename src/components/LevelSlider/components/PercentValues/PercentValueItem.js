import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { LevelSliderContext } from '../../contexts/LevelSlider/LevelSliderState';

const DEFAULT_VERTICAL_POSITION = 15;

const PercentValueItem = ({ value }) => {
  const { state: { sliderPosition } } = useContext(LevelSliderContext);
  const [horizontalPosition, setHorizontalPosition] = useState({ x0: value, x1: value });
  const [verticalPosition, setVerticalPosition] = useState(DEFAULT_VERTICAL_POSITION);

  const verifySliderInsideValue = () => {
    const { x0, x1 } = horizontalPosition;

    if (sliderPosition >= x0 && sliderPosition <= x1) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const sliderInsideItem = verifySliderInsideValue();

    if (verticalPosition === DEFAULT_VERTICAL_POSITION && sliderInsideItem) {
      setVerticalPosition(45);
    }

    if (verticalPosition > DEFAULT_VERTICAL_POSITION && !sliderInsideItem) {
      setVerticalPosition(DEFAULT_VERTICAL_POSITION);
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
      style={{
        paddingHorizontal: 20,
        bottom: verticalPosition,
      }}
    >
      <Text style={{ textAlign: 'center', fontSize: 15 }}>{`${value}%`}</Text>
    </View>
  );
};

export default PercentValueItem;
