import React, { useContext } from 'react';
import { View } from 'react-native';

import Slider from './components/Slider';

import { LevelSliderContext } from './contexts/LevelSlider/LevelSliderState';
import AnimatedValues from './components/AnimatedValues';

import styles from './styles';
import strings from '../../strings';

const descriptionValues = [
  strings.slightily,
  strings.a_little,
  strings.fairly,
  strings.very,
  strings.extremely,
];

const percentValues = [
  '0%',
  '25%',
  '50%',
  '75%',
  '100%',
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
      style={styles.sliderContainer}
    >
      <AnimatedValues
        values={percentValues}
        defaultVerticalPosition={-50}
        selectedPositionValue={-75}
        valueColor="black"
        direction="up"
        valueWrapperStyle={styles.percentValuesContainer}
      />
      <Slider />
      <AnimatedValues
        values={descriptionValues}
        defaultVerticalPosition={-70}
        selectedPositionValue={-30}
        valueColor="white"
        direction="down"
        valueWrapperStyle={styles.textValuesContainer}
      />
    </View>
  );
};

export default Container;
