import React, { useState } from 'react';
import { Text, Animated, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import PropTypes from 'prop-types';

const FeelingItem = ({
  icon, value, animated, onLayoutHandler, identifier, positionProp,
}) => {
  const [dynamicWidth, setDynamicWidth] = useState(0);
  const [isDragingItem, setIsDragingItem] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState(positionProp);
  const [actualPosition, setActualPosition] = useState(undefined);

  const onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { width, x, y } = layout;

    setDynamicWidth(width);
    onLayoutHandler({ ...nativeEvent, key: identifier });

    if (!isDragingItem) {
      setActualPosition({
        left: x, top: y,
      });
    }
  };

  const getPosition = (position, axis) => {
    const directions = {
      x: 'width',
      y: 'height',
    };

    const borders = {
      x: 'left',
      y: 'top',
    };

    if (position >= 0 && position + dynamicWidth <= Dimensions.get('window')[directions[axis]]) {
      console.log('caiu aqui');

      return position;
    }

    return actualPosition[borders[axis]];
  };

  const onGestureEvent = ({ nativeEvent }) => {
    setIsDragingItem(true);
    const { translationX, translationY } = nativeEvent;
    const { left, top } = actualPosition;

    const positionX = Number(left + translationX);
    const positionY = top + translationY;

    setDynamicPosition({
      left: getPosition(positionX, 'x'), top: positionY,
    });
  };

  const onHandlerStateChange = ({ nativeEvent }) => {
    setIsDragingItem(false);
    const { state } = nativeEvent;

    if (state === 5) {
      setActualPosition(dynamicPosition);
    }
  };

  return (
    <PanGestureHandler
      onHandlerStateChange={onHandlerStateChange}
      onGestureEvent={onGestureEvent}
    >
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
        },
        !positionProp && animated && dynamicPosition
        && { ...dynamicPosition, position: 'absolute' },
        positionProp && {
          ...positionProp, position: 'absolute',
        },
        ]}
      >
        <Text>{icon}</Text>
        <Text>{value}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

FeelingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  animated: PropTypes.bool,
};

FeelingItem.defaultProps = {
  animated: false,
};

export default FeelingItem;
