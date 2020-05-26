import { StyleSheet } from 'react-native';
import { lightPurple, white } from '../../../../components/Colors';

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    backgroundColor: lightPurple,
    justifyContent: 'center',
    minWidth: 64,
    padding: 10,
  },
  itemIcon: {
    fontSize: 14,
    padding: 4,
  },
  itemValue: {
    color: white,
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default styles;
