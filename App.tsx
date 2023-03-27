import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainDrawerNavigation from './src/navigation/MainDrawer';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainDrawerNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
