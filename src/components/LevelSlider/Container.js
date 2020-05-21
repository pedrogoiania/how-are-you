import React, { useContext } from 'react';
import { View } from 'react-native';

import PercentValues from './components/PercentValues';
import ValuesDescriptions from './components/ValuesDescription';
import Slider from './components/Slider';

import { LevelSliderContext } from './contexts/LevelSlider/LevelSliderState';
import AnimatedValues from './components/AnimatedValues';

const descriptionValues = [
  'Slightily',
  'A little',
  'Fairly',
  'Very',
  'Extremely',
];

const percentValues = [
  0,
  25,
  50,
  75,
  100,
];


const Container = () => {
  const { dispatch } = useContext(LevelSliderContext);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { height } = layout;

    dispatch({
      type: 'LEVEL_SLIDER_HEIGHT',
      payload: height,
    });
  };

  return (
    <View
      onLayout={onLayout}
      style={{ paddingHorizontal: 10 }}
    >
      {/* <PercentValues /> */}
      <AnimatedValues
        values={percentValues}
        defaultVerticalPosition={-50}
        selectedPositionValue={-75}
        valueColor="black"
        direction="up"
        valueWrapperStyle={{
          backgroundColor: 'blue',
          paddingHorizontal: 25,
        }}
      />
      <Slider />
      {/* <ValuesDescriptions /> */}

      <AnimatedValues
        values={descriptionValues}
        defaultVerticalPosition={-70}
        selectedPositionValue={-30}
        valueColor="white"
        direction="down"
        valueWrapperStyle={{
          backgroundColor: 'red',
          paddingHorizontal: 15,
        }}
      />
    </View>
  );
};

export default Container;
