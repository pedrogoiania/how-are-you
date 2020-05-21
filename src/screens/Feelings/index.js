import React from 'react';
import FeelingsList from './components/FeelingsList';

const Feelings = ({ navigation }) => {
  const onFeelingPressed = () => {
    navigation.navigate('MyFeeling');
  };

  return (
    <FeelingsList onFeelingPressed={onFeelingPressed} />
  );
};

export default Feelings;
