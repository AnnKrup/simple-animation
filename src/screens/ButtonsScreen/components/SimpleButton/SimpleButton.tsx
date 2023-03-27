import React, {useMemo, useRef, useState} from 'react';
import {Pressable, Text, Animated} from 'react-native';
import {buttonsActions, buttonsStates, colorsRange} from '../../slice';

import {
  useAppDispatch,
  useTypedSelector,
} from '../../../../store/configureStore';
import styles from './styles';
import {getButtonSimple} from './selectors';

function SimpleButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const [animationProgress, setAnimationProgress] = useState(false);
  const simpleButton = useTypedSelector(getButtonSimple);

  const color = useRef(new Animated.Value(0)).current;
  const colorInterpolation = color.interpolate({
    inputRange: colorsRange.map((item, index) => index),
    outputRange: colorsRange,
  });

  const nextValue = useMemo(() => {
    const nextStep = buttonsStates.find(
      item => item.currentColor === simpleButton,
    );

    if (!nextStep) {
      return;
    }

    return nextStep.index + 1;
  }, [simpleButton]);

  const onPress = () => {
    if (animationProgress) {
      return;
    }

    const nextColor = buttonsStates.find((item, index) => index === nextValue);

    if (!nextColor) {
      return;
    }

    setAnimationProgress(true);

    Animated.timing(color, {
      toValue: nextValue!,
      duration: 1000,
      useNativeDriver: !__DEV__,
    }).start(() => {
      setAnimationProgress(false);
      if (nextValue !== buttonsStates.length - 1) {
        dispatch(buttonsActions.setButtonSimpleColor(nextColor.currentColor));
      } else {
        Animated.timing(color, {
          toValue: 0,
          duration: 0,
          useNativeDriver: !__DEV__,
        }).start();

        dispatch(
          buttonsActions.setButtonSimpleColor(buttonsStates[0].currentColor),
        );
      }
    });
  };

  return (
    <Animated.View
      style={[styles.wrapper, {backgroundColor: colorInterpolation}]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Simple button</Text>
      </Pressable>
    </Animated.View>
  );
}

export default SimpleButton;
