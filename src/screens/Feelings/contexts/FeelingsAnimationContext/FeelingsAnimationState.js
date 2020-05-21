import { createContext } from 'react';

export const FeelingsAnimation = createContext();

export const FeelingsAnimationReducer = (state, { type, payload }) => {
  const actions = {
    FEELINGS_ITEMS_MATRIX: {
      ...state,
      feelingsItemsMatrix: payload.feelingsItemsMatrix,
    },
  };

  return actions[type];
};

export const FeelingsAnimationInitialState = {
  feelingsItemsMatrix: [],
};
