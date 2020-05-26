import React from 'react';
import { FlatList, View, Text } from 'react-native';

import { useQuery } from '@apollo/react-hooks';

import { GET_FEELINGS } from './index.graphql';

import FeelingItem from '../FeelingItem';


const Feelings = ({ onFeelingPressed }) => {
  const { loading, data } = useQuery(GET_FEELINGS);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(119,75,227)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Loading...</Text>
      </View>
    );
  }

  if (data) {
    return (
      <FlatList
        style={{
          paddingTop: 20,
          backgroundColor: 'rgb(119,75,227)',
        }}
        numColumns={4}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          paddingVertical: 8,
        }}
        refreshing={loading}
        extraData={data.getAllFeelings}
        data={data.getAllFeelings}
        keyExtractor={({ title }) => title}
        renderItem={(
          {
            item: { title, icon },
          },
        ) => <FeelingItem icon={icon} value={title} onPress={onFeelingPressed} />}
      />
    );
  }

  return null;
};

export default Feelings;
