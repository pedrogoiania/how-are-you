import React, { useContext } from 'react';
import { View } from 'react-native';

import PercentValues from './components/PercentValues';
import ValuesDescriptions from './components/ValuesDescription';
import Slider from './components/Slider';

import { LevelSliderContext } from './contexts/LevelSlider/LevelSliderState';


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
      <PercentValues />
      <Slider />
      <ValuesDescriptions />
    </View>
  );
};

export default Container;
