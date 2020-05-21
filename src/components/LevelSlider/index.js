import React from 'react';

import LevelSliderProvider from './contexts/LevelSlider/LevelSliderProvider';


import Container from './Container';

const LevelSlider = () => (
  <LevelSliderProvider>
    <Container />
  </LevelSliderProvider>
);

export default LevelSlider;
