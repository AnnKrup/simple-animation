import React, {useMemo, useRef, useState} from 'react';
import {Pressable, Text, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {buttonsActions, buttonsStates, colorsRange} from '../../slice';
import {useAppDispatch} from '../../../../store/configureStore';
import styles from './styles';
import {getButtonStyled} from './selectors';

const StyledView = styled(Animated.View)`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

function StyledComponentsButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const [animationProgress, setAnimationProgress] = useState(false);
  const styledButton = useSelector(getButtonStyled);

  const color = useRef(new Animated.Value(0)).current;
  const colorInterpolation = color.interpolate({
    inputRange: colorsRange.map((item, index) => index),
    outputRange: colorsRange,
  });

  const nextValue = useMemo(() => {
    const nextStep = buttonsStates.find(
      item => item.currentColor === styledButton,
    );

    if (!nextStep) {
      return;
    }

    return nextStep.index + 1;
  }, [styledButton]);

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
      useNativeDriver: false,
    }).start(() => {
      setAnimationProgress(false);

      if (nextValue !== buttonsStates.length - 1) {
        dispatch(buttonsActions.setButtonStyledColor(nextColor.currentColor));
      } else {
        Animated.timing(color, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();

        dispatch(
          buttonsActions.setButtonStyledColor(buttonsStates[0].currentColor),
        );
      }
    });
  };

  return (
    <StyledView style={{backgroundColor: colorInterpolation}}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Styled component</Text>
      </Pressable>
    </StyledView>
  );
}

export default StyledComponentsButton;
