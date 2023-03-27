import {StyleSheet} from 'react-native';
import {firstColor} from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {width: '100%', paddingHorizontal: 16},
  drawerItem: {
    width: '100%',
    backgroundColor: firstColor,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default styles;
