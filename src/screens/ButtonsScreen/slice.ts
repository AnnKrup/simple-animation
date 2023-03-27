import {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {
  firstColor,
  fourthColor,
  secondColor,
  thirdColor,
} from '../../constants/colors';
import {ButtonsSlice} from './types';

export const colorsRange = [
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  firstColor,
];

export const buttonsStates = colorsRange.map((item, index) => ({
  currentColor: item,
  index,
}));

export const initialState: ButtonsSlice = {
  buttonSimple: firstColor,
  buttonReanimated: {color: firstColor, index: 0},
  buttonStyled: firstColor,
  posts: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'buttons',
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<any[]>) {
      state.posts = action.payload;
      state.loading = false;
    },
    setButtonStyledColor(state, action: PayloadAction<string>) {
      state.buttonStyled = action.payload;
    },
    setButtonSimpleColor(state, action: PayloadAction<string>) {
      state.buttonSimple = action.payload;
    },
    setButtonReanimatedColor(
      state,
      action: PayloadAction<{color: string; index: number}>,
    ) {
      state.buttonReanimated = action.payload;
    },
    postsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      state.error = null;
    },
    postsError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {actions: buttonsActions, reducer} = slice;
