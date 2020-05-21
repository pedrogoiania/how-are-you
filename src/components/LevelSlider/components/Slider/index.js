import React, { useState, useContext } from 'react';
import { View, Animated } from 'react-native';

import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { LevelSliderContext } from '../../contexts/LevelSlider/LevelSliderState';

const externalCircleSize = 70;

const Circle = () => (
  <Animated.View
    style={{
      height: externalCircleSize,
      width: externalCircleSize,
      borderRadius: externalCircleSize,
      //   backgroundColor: 'rgb(119,75,227)',
      backgroundColor: 'gray',
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
  const { state: { height } } = useContext(LevelSliderContext);
  const [horizontalPosition, setHorizontalPosition] = useState(undefined);
  const [actualHorizontalPosition, setActualHorizontalPosition] = useState(0);

  const onGestureEvent = ({ nativeEvent }) => {
    const { translationX } = nativeEvent;
    setHorizontalPosition(translationX + actualHorizontalPosition);
  };

  const onHandlerStateChange = ({ nativeEvent }) => {
    const { translationX, state } = nativeEvent;
    if (state === State.END) {
      setHorizontalPosition(undefined);
      setActualHorizontalPosition(translationX + actualHorizontalPosition);
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
