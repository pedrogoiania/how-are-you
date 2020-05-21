import React, { useState } from 'react';
import { Text, View } from 'react-native';

const FeelingItem = ({ icon, value }) => {
  const [dynamicWidth, setDynamicWidth] = useState(0);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { width } = layout;
    setDynamicWidth(width);
  };

  return (
    <View
      onLayout={onLayout}
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
    </View>
  );
};

export default FeelingItem;
