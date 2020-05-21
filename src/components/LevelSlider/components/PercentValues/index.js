import React, { useState } from 'react';
import { View, Text } from 'react-native';

const PercentValues = () => {
  const [top, setTop] = useState(0);
  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { height } = layout;
    setTop(Number(height) * -1);
  };

  return (
    <View
      onLayout={onLayout}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top,
      }}
    >
      <View style={{ alignItems: 'center', backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center' }}>0%</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>25%</Text>
      </View>
      <View style={{ alignItems: 'center', backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center' }}>50%</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>75%</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>100%</Text>
      </View>
    </View>
  );
};

export default PercentValues;
