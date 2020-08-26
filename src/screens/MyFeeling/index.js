import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import FeelingDescription from './components/FeelingDescription';
import FeelingLevel from './components/FeelingLevel';

import { FEELING_DETAIL } from './index.graphql';

const MyFeeling = ({ route: { params }, navigation: { goBack } }) => {
  const { feeling } = params;

  console.log(feeling);

  const { id } = feeling;

  const { loading, data, error } = useQuery(FEELING_DETAIL, {
    variables: {
      id,
    },
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>carai, deu erro...</Text>
      </View>
    );
  }

  if (data?.feelingDetail) {
    const feelingData = data.feelingDetail;
    return (
      <View style={{ flex: 1 }}>
        <FeelingDescription feeling={feelingData} />
        <FeelingLevel backButtonHandler={goBack} />
      </View>
    );
  }
};

export default MyFeeling;
