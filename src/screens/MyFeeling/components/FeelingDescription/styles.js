import { StyleSheet } from 'react-native';

import {
  lightPurple,
  gray,
  white,
} from '../../../../components/Colors';

const styles = StyleSheet.create({

  feelingContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  feelingIcon: {
    fontSize: 40,
  },
  feelingText: {
    fontSize: 40,
  },
  feelingValue: {
    color: lightPurple,
    fontSize: 40,
  },
  feelingMessage: {
    color: gray,
    fontSize: 16,
    paddingVertical: 20,
  },
});

export default styles;
