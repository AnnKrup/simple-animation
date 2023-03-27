import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import mainReducer, {RootState} from './reducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

function configureAppStore() {
  const store = configureStore({
    reducer: mainReducer,
    middleware: defaultMiddleware => [...defaultMiddleware(), thunk],
  });

  return store;
}

const store = configureAppStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
