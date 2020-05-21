import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { FeelingsAnimation, FeelingsAnimationReducer, FeelingsAnimationInitialState } from './FeelingsAnimationState';

const FeelingsAnimationProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(FeelingsAnimationReducer, initialState);

  return (
    <FeelingsAnimation.Provider value={{ state, dispatch }}>
      {children}
    </FeelingsAnimation.Provider>
  );
};

FeelingsAnimationProvider.propTypes = {
  children: PropTypes.object.isRequired,
  initialState: PropTypes.object,
};

FeelingsAnimationProvider.defaultProps = {
  initialState: FeelingsAnimationInitialState,
};

export default FeelingsAnimationProvider;
