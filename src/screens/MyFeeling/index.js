import React from 'react';
import { View, Text } from 'react-native';
import SecondaryButton from '../../components/Buttons/SecondaryButton';

const MyFeeling = ({ route: { params }, navigation: { goBack } }) => {
  const { feeling } = params;

  console.log(feeling);

  const text = 'I\'m feeling';

  const text2 = 'Choose the intensity of your feeling';

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
      >
        <Text style={{ fontSize: 40 }}>{feeling.icon}</Text>
        <Text style={{ fontSize: 40 }}>{text}</Text>
        <Text style={{ fontSize: 40, color: 'rgb(133,88,244)' }}>{feeling.value}</Text>
        <Text style={{ paddingVertical: 20, color: 'gray' }}>{text2}</Text>
      </View>
      <View style={{
        flex: 5,
        backgroundColor: 'rgb(119,75,227)',
      }}
      >
        <View style={{
          padding: 20, position: 'absolute', bottom: 20, width: '100%',
        }}
        >
          <SecondaryButton onPress={goBack} />
        </View>
      </View>
    </View>


  );
};

export default MyFeeling;
