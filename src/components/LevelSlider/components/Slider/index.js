import React, { useState, useContext } from 'react';
import { View, Animated } from 'react-native';

import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { LevelSliderContext } from '../../contexts/LevelSlider/LevelSliderState';

const externalCircleSize = 70;
const MIN_HORIZONTAL_POSITION = 5;
const MAX_HORIZONTAL_POSITION = 320;

const Circle = () => (
  <Animated.View
    style={{
      height: externalCircleSize,
      width: externalCircleSize,
      borderRadius: externalCircleSize,
      backgroundColor: 'rgb(119,75,227)',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Animated.View style={{
      height: 40,
      width: 40,
      borderRadius: 40,
      backgroundColor: 'white',
    }}
    />
  </Animated.View>
);

const Slider = () => {
  const { dispatch, state: { height } } = useContext(LevelSliderContext);
  const [horizontalPosition, setHorizontalPosition] = useState(undefined);
  const [actualHorizontalPosition, setActualHorizontalPosition] = useState(0);

  const dispatchHorizontalPosition = (payload) => {
    dispatch({
      type: 'SLIDER_POSITION',
      payload,
    });
  };

  const checkHorizontalLimit = (horizontalPositionValue) => {
    if (
      horizontalPositionValue >= MIN_HORIZONTAL_POSITION
      && horizontalPositionValue < MAX_HORIZONTAL_POSITION
    ) {
      return true;
    }

    return false;
  };

  const onGestureEvent = ({ nativeEvent }) => {
    const { translationX } = nativeEvent;

    const horizontalPositionValue = translationX + actualHorizontalPosition;

    const inHorizontalLimit = checkHorizontalLimit(horizontalPositionValue);

    if (inHorizontalLimit) {
      setHorizontalPosition(horizontalPositionValue);
      dispatchHorizontalPosition(horizontalPositionValue);
    }
  };

  const onHandlerStateChange = ({ nativeEvent }) => {
    const { translationX, state } = nativeEvent;
    if (state === State.END) {
      const inHorizontalLimit = checkHorizontalLimit(horizontalPosition);

      if (inHorizontalLimit) {
        setHorizontalPosition(undefined);

        const horizontalPositionValue = translationX + actualHorizontalPosition;

        setActualHorizontalPosition(horizontalPositionValue);
        dispatchHorizontalPosition(horizontalPositionValue);
      }
    }
  };

  return (
    <View style={{ top: (height * -1) / 2 }}>

      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={{
            left: horizontalPosition || actualHorizontalPosition,
          }}
        >
          <Circle />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Slider;
