import React from 'react';
import { FlatList, View, Text } from 'react-native';

import { useQuery } from '@apollo/react-hooks';

import { GET_FEELINGS } from './index.graphql';

import FeelingItem from '../FeelingItem';

import styles from './styles';

const Feelings = ({ onFeelingPressed }) => {
  const { loading, data } = useQuery(GET_FEELINGS);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const renderItem = ({ item: feeling }) => (
    <FeelingItem
      feeling={feeling}
      onPress={onFeelingPressed}
    />
  );

  if (data) {
    console.log(data);

    return (
      <FlatList
        style={styles.listContainer}
        numColumns={4}
        columnWrapperStyle={styles.listColumnContainer}
        refreshing={loading}
        extraData={data.getAllFeelings}
        data={data.getAllFeelings}
        keyExtractor={({ title }) => title}
        renderItem={renderItem}
      />
    );
  }

  return null;
};

export default Feelings;
