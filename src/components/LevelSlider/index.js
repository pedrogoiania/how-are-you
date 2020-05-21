import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';

import {
  PanGestureHandler,
} from 'react-native-gesture-handler';

const Circle = () => (
  <Animated.View
    style={{
      height: 80,
      width: 80,
      borderRadius: 80,
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


const LevelSlider = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);

  const horizontalPositionLet = 0;

  const onGestureEvent = ({ nativeEvent }) => {
    const { x, absoluteX } = nativeEvent;
    console.log(nativeEvent);
    setHorizontalPosition(absoluteX - 80);
  };

  console.log('');
  return (
    <View style={{ position: 'absolute', top: -40 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onGestureEvent}>
        <Animated.View
          onLayout={({ nativeEvent: { layout } }) => {
            console.log(layout);
          }}
          style={{
            // position: 'absolute',
            left: horizontalPosition,
          }}
        >
          <Circle />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default LevelSlider;
