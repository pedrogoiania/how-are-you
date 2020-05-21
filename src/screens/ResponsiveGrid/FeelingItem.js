import React from 'react';
import {
  Text, View,
} from 'react-native';

import PropTypes from 'prop-types';

const FeelingItem = ({
  icon, value, size,
}) => (
  <View
    style={{
      borderColor: 'black',
      borderWidth: 2,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      height: size,
      width: size,
      borderRadius: size / 2,
      margin: 4,
    }}
  >
    <Text>{icon}</Text>
    <Text>{value}</Text>
  </View>
);

FeelingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
export default FeelingItem;
