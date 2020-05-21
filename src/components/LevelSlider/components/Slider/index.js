import React, { useState, useContext } from 'react';
import { View, Animated, Dimensions } from 'react-native';

import { SvgXml } from 'react-native-svg';

import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { LevelSliderContext } from '../../contexts/LevelSlider/LevelSliderState';

import sliderIcon from '../../../../assets/icons/slider-icon';

const MIN_HORIZONTAL_POSITION = Dimensions.get('window').width * 0.01;
const MAX_HORIZONTAL_POSITION = Dimensions.get('window').width * 0.95;
const INITIAL_HORIZONTAL_POSITION = Dimensions.get('window').width * 0.01;

const Circle = () => (
  <Animated.View
    style={{
      height: 80,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SvgXml
      width="100%"
      height="100%"
      xml={sliderIcon}
    />
  </Animated.View>
);

const Slider = () => {
  const { dispatch, state: { height } } = useContext(LevelSliderContext);
  const [horizontalPosition, setHorizontalPosition] = useState(undefined);
  const [actualHorizontalPosition, setActualHorizontalPosition] = useState(INITIAL_HORIZONTAL_POSITION);

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
