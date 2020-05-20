import React from 'react';
import { View } from 'react-native';
import FeelingItem from './components/FeelingItem';


const Feelings = () => (
  <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
  }}
  >
    <FeelingItem icon="😇" value="peace" />
    <FeelingItem icon="😃" value="happy" />
    <FeelingItem icon="🤣" value="funny" />
    <FeelingItem icon="😂" value="very very funny" />
    <FeelingItem icon="🤣" value="funny" />
    <FeelingItem icon="🤣" value="funny" />
    <FeelingItem icon="🤯" value="find my place" />
  </View>
);

export default Feelings;
