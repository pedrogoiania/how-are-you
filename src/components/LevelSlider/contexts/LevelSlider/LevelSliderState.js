import { createContext } from 'react';

export const LevelSliderContext = createContext();

export const LevelSliderReducers = (state, { type, payload }) => {
  const actions = {
    LEVEL_SLIDER_HEIGHT: { ...state, height: payload },
    SLIDER_POSITION: { ...state, sliderPosition: payload },
  };

  return actions[type];
};

export const LevelSliderInitialState = {
  height: 0,
  sliderPosition: 0,
};
