import React from 'react';
import { View } from 'react-native';
import FeelingItem from './components/FeelingItem';

import FeelingsAnimationProvider from './contexts/FeelingsAnimationContext/FeelingsAnimationProvider';
import FeelingsMatrix from './components/FeelingsMatrix';


const Feelings = () => (
  <FeelingsMatrix />
);

export default Feelings;
