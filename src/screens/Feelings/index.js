import React from 'react';
import FeelingsList from './components/FeelingsList';

const Feelings = ({ navigation }) => {
  const onFeelingPressed = (feeling) => {
    navigation.navigate('MyFeeling', { feeling });
  };

  return (
    <FeelingsList onFeelingPressed={onFeelingPressed} />
  );
};

export default Feelings;
