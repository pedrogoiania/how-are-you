import React, { useState } from 'react';
import {
  View, Text, Button, Dimensions,
} from 'react-native';
import FeelingItem from '../FeelingItem';

const feelingsConst = [
  {
    icon: '😇',
    value: 'peace',
  },

  {
    icon: '😃',
    value: 'happy',
  },

  {
    icon: '🤣',
    value: 'funny',
  },

  {
    icon: '😂',
    value: 'very very funny',
  },

  {
    icon: '🤣',
    value: 'funny',
  },

  {
    icon: '🤣',
    value: 'funny',
  },

  {
    icon: '🤯',
    value: 'find my place',
  },
];

const FeelingsMatrix = () => {
  const [feelingsPositions, setFeelingsPositions] = useState([]);

  const [feelings, setFeelings] = useState(feelingsConst);

  const onLayoutHandler = ({ layout, key }) => {
    console.log(layout);
    const { x, y, width } = layout;

    const position = {
      key,
      x0: x,
      y0: y,
      x1: x + width,
      y1: y + width,
    };

    const positionToUpdate = feelingsPositions.find((item) => item.key === key);

    console.log(positionToUpdate);

    const tempFeelingsPositions = [...feelingsPositions];

    if (positionToUpdate) {
      const index = tempFeelingsPositions.findIndex((item) => item.key === positionToUpdate.key);
      tempFeelingsPositions.splice(index, 1);
    }

    tempFeelingsPositions.push(position);

    setFeelingsPositions(tempFeelingsPositions);
  };

  const checkIfPositionIsOcuppied = ({
    x0, x1, y0, y1, x, y,
  }) => {
    let axisXocuppied = false;
    let axisYocuppied = false;

    if (x0 >= x || x1 <= x) {
      axisXocuppied = true;
    }

    if (y0 >= y || y1 <= y) {
      axisYocuppied = true;
    }

    return axisXocuppied && axisYocuppied;
  };

  const getAvailablePosition = () => {
    const availableArea = {
      x: Dimensions.get('window').width,
      y: Dimensions.get('window').height,
    };

    console.log('availableArea', availableArea);

    for (let x = 0; x < 400; x += 1) {
      for (let y = 0; y < 800; y += 1) {
        const ocuppiedPosition = feelingsPositions
          .find((item) => {
            const positionOcuppied = checkIfPositionIsOcuppied({ ...item, x, y });
            console.log('positionOcuppied', positionOcuppied);

            return positionOcuppied;
          });

        if (!ocuppiedPosition) {
          return { x, y };
        }
      }
    }

    return null;
  };


  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    >
      {
        feelings.map(({ icon, value, positionProp }, index) => (
          <FeelingItem
            identifier={String(index)}
            onLayoutHandler={onLayoutHandler}
            key={String(index)}
            icon={icon}
            value={value}
            positionProp={positionProp}
          />
        ))
        }
      <Button title="Listar matriz de sentimentos" onPress={() => { console.log(feelingsPositions); }} />
      <Button
        title="Mostrar posição disponivel"
        onPress={() => {
          const axis = getAvailablePosition();

          console.log('axis', axis);

          //   const positionProp = {
          //     left: axis.x,
          //     top: axis.y,
          //   };

          //   feelingsConst.push({
          //     icon: '🏎',
          //     value: 'uhuuuul',
          //     positionProp,
          //   });

        //   setFeelings(feelingsConst);
        }}
      />

    </View>
  );
};
export default FeelingsMatrix;
