import React from 'react';
import {View} from 'react-native';
import StyledComponentsButton from './components/StyledComponentsButton/StyledComponentsButton';
import SimpleButton from './components/SimpleButton/SimpleButton';
import ReanimatedButton from './components/ReanimatedButton/ReanimatedButton';
import styles from './styles';

function ButtonsScreen(): JSX.Element {
  return (
    <View style={styles.wrapper}>
      <ReanimatedButton />
      <SimpleButton />
      <StyledComponentsButton />
    </View>
  );
}

export default ButtonsScreen;
