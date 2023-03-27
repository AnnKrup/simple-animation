import {createDrawerNavigator} from '@react-navigation/drawer';
import {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './TabsDrawer';
import Drawer from '../components/DrawerComponent';

export const MainDrawer = createDrawerNavigator();

export enum MainDrawerRoutes {
  Tabs = 'BottomTabs',
}

const MainDrawerNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <MainDrawer.Navigator
        initialRouteName={MainDrawerRoutes.Tabs}
        drawerContent={props => <Drawer {...props} />}
        backBehavior="initialRoute">
        <MainDrawer.Screen
          name={MainDrawerRoutes.Tabs}
          options={{
            headerTitle: 'Simple App',
          }}
          component={BottomTabs}
        />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawerNavigation;
