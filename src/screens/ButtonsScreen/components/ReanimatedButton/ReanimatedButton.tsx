import React, {useMemo, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {buttonsActions, buttonsStates, colorsRange} from '../../slice';

import {
  useAppDispatch,
  useTypedSelector,
} from '../../../../store/configureStore';
import styles from './styles';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {getButtonReanimated} from './selectors';

function ReanimatedButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const [animationProgress, setAnimationProgress] = useState(false);
  const reanimatedButton = useTypedSelector(getButtonReanimated);

  const value = useMemo(() => {
    if (reanimatedButton.index) {
      setAnimationProgress(true);
    }

    return reanimatedButton.index;
  }, [reanimatedButton]);

  const color = useDerivedValue(() => {
    return value
      ? withTiming(value!, {duration: 1000}, () => {
          setAnimationProgress(false);
        })
      : value!;
  }, [value]);

  const bgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      color.value,
      colorsRange.map((item, i) => i),
      colorsRange,
    );

    return {backgroundColor};
  });

  const onPress = () => {
    if (animationProgress) {
      return;
    }

    const nextColor = buttonsStates.find((item, index) => index === value + 1);

    if (nextColor) {
      dispatch(
        buttonsActions.setButtonReanimatedColor({
          color: nextColor.currentColor,
          index: value + 1,
        }),
      );
    } else {
      dispatch(
        buttonsActions.setButtonReanimatedColor({
          color: buttonsStates[0].currentColor,
          index: 0,
        }),
      );
      setTimeout(() => {
        dispatch(
          buttonsActions.setButtonReanimatedColor({
            color: buttonsStates[1].currentColor,
            index: 1,
          }),
        );
      }, 50);
    }
  };

  return (
    <Animated.View style={[styles.wrapper, bgStyle]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Reanimated button</Text>
      </Pressable>
    </Animated.View>
  );
}

export default ReanimatedButton;
