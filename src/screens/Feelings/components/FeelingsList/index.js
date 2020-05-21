import React from 'react';
import { FlatList } from 'react-native';
import FeelingItem from '../FeelingItem';

const values = [
  { value: 'happy', icon: '😊' },
  { value: 'confident', icon: '😍' },
  { value: 'proud', icon: '😎' },
  { value: 'greatful', icon: '😇' },
  { value: 'numb', icon: '😐' },
  { value: 'angry', icon: '😠' },
  { value: 'bored', icon: '🙁' },
  { value: 'joyful', icon: '🤗' },
  { value: 'optimistic', icon: '😃' },
  { value: 'okay', icon: '🙆‍♂️' },
  { value: 'depressed', icon: '😢' },
  { value: 'wicked', icon: '😈' },
  { value: 'excited', icon: '😄' },
  { value: 'anxious', icon: '😰' },
  { value: 'stressed', icon: '🤒' },
  { value: 'tired', icon: '😩' },
  { value: 'ashamed', icon: '😳' },
  { value: 'insecure', icon: '😞' },
  { value: 'sad', icon: '😥' },
  { value: 'envious', icon: '😏' },
  { value: 'disgusted', icon: '🤢' },
  { value: 'friendly', icon: '🙂' },
  { value: 'positive', icon: '👌' },
];


const Feelings = () => (
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
    data={values}
    keyExtractor={({ value }) => value}
    renderItem={(
      {
        item: { value, icon },
      },
    ) => <FeelingItem icon={icon} value={value} />}
  />
);

export default Feelings;
