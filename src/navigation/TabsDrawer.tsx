import React, {ReactElement} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/PostsScreen/PostsScreen';
import ButtonsScreen from '../screens/ButtonsScreen/ButtonsScreen';

export const MainTab = createBottomTabNavigator();

export enum MainTabRoutes {
  Buttons = 'Buttons',
  Posts = 'Posts',
}

const BottomTabs = (): ReactElement => {
  return (
    <MainTab.Navigator
      initialRouteName={MainTabRoutes.Buttons}
      screenOptions={{headerShown: false}}>
      <MainTab.Screen name={MainTabRoutes.Buttons} component={ButtonsScreen} />
      <MainTab.Screen name={MainTabRoutes.Posts} component={MainScreen} />
    </MainTab.Navigator>
  );
};

export default BottomTabs;
