import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { LevelSliderContext } from '../../contexts/LevelSlider/LevelSliderState';

const PercentValueItem = ({ value }) => {
  const { state: { sliderPosition } } = useContext(LevelSliderContext);
  const [horizontalPosition, setHorizontalPosition] = useState({ x0: value, x1: value });
  const [verticalPosition, setVerticalPosition] = useState(0);

  const verifySliderInsideValue = () => {
    const { x0, x1 } = horizontalPosition;

    if (sliderPosition >= x0 && sliderPosition <= x1) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const sliderInsideItem = verifySliderInsideValue();

    if (verticalPosition === 0 && sliderInsideItem) {
      setVerticalPosition(35);
    }

    if (verticalPosition > 0 && !sliderInsideItem) {
      setVerticalPosition(0);
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
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        bottom: verticalPosition,
      }}
    >
      <Text style={{ textAlign: 'center' }}>{`${value}%`}</Text>
    </View>
  );
};

export default PercentValueItem;
