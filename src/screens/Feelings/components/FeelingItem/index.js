import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FeelingItem = ({ icon, value, onPress }) => {
  const [dynamicWidth, setDynamicWidth] = useState(0);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { width } = layout;
    setDynamicWidth(width);
  };

  const handleOnPress = () => {
    const feeling = { icon, value };
    onPress(feeling);
  };

  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={handleOnPress}
      activeOpacity={0.6}
      style={{
        backgroundColor: 'rgb(133,88,244)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        minWidth: 64,
        height: dynamicWidth,
        borderRadius: dynamicWidth / 2,
      }}
    >
      <Text>{icon}</Text>
      <Text style={{ color: 'white' }}>{value}</Text>
    </TouchableOpacity>
  );
};

export default FeelingItem;
