import React, { useState } from 'react';
import { View } from 'react-native';

import PercentValueItem from './PercentValueItem';

const PercentValues = () => {
  const [top, setTop] = useState(0);
  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { height } = layout;

    setTop(Number(height) * -1);
  };

  const renderItems = () => {
    const items = [];

    for (let i = 0; i <= 100; i += 25) {
      items.push(<PercentValueItem value={i} />);
    }

    return items;
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

      {
        renderItems()
      }
    </View>
  );
};

export default PercentValues;
