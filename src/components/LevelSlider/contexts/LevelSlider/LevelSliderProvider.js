import React, { useReducer } from 'react';
import { object } from 'prop-types';

import { LevelSliderContext, LevelSliderReducers, LevelSliderInitialState } from './LevelSliderState';

const LevelSliderProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(LevelSliderReducers, initialState);

  return (
    <LevelSliderContext.Provider value={{ state, dispatch }}>
      {children}
    </LevelSliderContext.Provider>
  );
};

LevelSliderProvider.propTypes = {
  children: object.isRequired,
  initialState: object,
};

LevelSliderProvider.defaultProps = {
  initialState: LevelSliderInitialState,
};

export default LevelSliderProvider;
