import React, { useState } from 'react';
import { Text, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const FeelingItem = ({ icon, value }) => {
  const [dynamicWidth, setDynamicWidth] = useState(0);
  const [isDragingItem, setIsDragingItem] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState(undefined);
  const [actualPosition, setActualPosition] = useState(undefined);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { width, x, y } = layout;

    setDynamicWidth(width);

    if (!isDragingItem) {
      setActualPosition({
        left: x, top: y,
      });
    }
  };

  const onGestureEvent = ({ nativeEvent }) => {
    setIsDragingItem(true);
    const { translationX, translationY } = nativeEvent;
    const { left, top } = actualPosition;

    setDynamicPosition({
      left: left + translationX, top: top + translationY,
    });
  };

  const onHandlerStateChange = ({ nativeEvent }) => {
    setIsDragingItem(false);
    const { state } = nativeEvent;

    if (state === 5) {
      console.log(dynamicPosition);
      setActualPosition(dynamicPosition);
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={onHandlerStateChange} onGestureEvent={onGestureEvent}>
      <Animated.View
        onLayout={onLayout}
        style={[{
          borderColor: 'black',
          borderWidth: 2,
          borderStyle: 'solid',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          height: dynamicWidth,
          borderRadius: dynamicWidth / 2,
          margin: 4,
        }, dynamicPosition && { ...dynamicPosition, position: 'absolute' }]}
      >
        <Text>{icon}</Text>
        <Text>{value}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default FeelingItem;
