import {reducer} from '../screens/ButtonsScreen/slice';
import {combineReducers} from '@reduxjs/toolkit';

const mainReducer = combineReducers({
  buttons: reducer,
});

export type RootState = ReturnType<typeof mainReducer>;

export default mainReducer;
