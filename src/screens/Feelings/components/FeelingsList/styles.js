import { StyleSheet } from 'react-native';
import { darkPurple, white } from '../../../../components/Colors';

const styles = StyleSheet.create({
  listColumnContainer: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  listContainer: {
    paddingTop: 20,
    backgroundColor: 'rgb(119,75,227)',
  },

  loadingContainer: {
    alignItems: 'center',
    backgroundColor: darkPurple,
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    color: white,
  },
});

export default styles;
