import { StyleSheet } from 'react-native';

import { darkPurple } from '../../Colors';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: darkPurple,
    textTransform: 'uppercase',
    fontSize: 12,
  },
});

export default styles;
