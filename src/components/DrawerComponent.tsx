import {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainDrawerRoutes} from '../navigation/MainDrawer';
import {MainTabRoutes} from '../navigation/TabsDrawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import styles from './styles';

const Drawer: FC<DrawerContentComponentProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, {paddingTop: insets.top}]}>
      <Pressable
        onPress={() => {
          navigation.navigate(MainDrawerRoutes.Tabs, {
            screen: MainTabRoutes.Posts,
          });
        }}
        style={styles.drawerItem}>
        <Text>Posts page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate(MainDrawerRoutes.Tabs, {
            screen: MainTabRoutes.Buttons,
          });
        }}
        style={styles.drawerItem}>
        <Text>Buttons page</Text>
      </Pressable>
    </View>
  );
};

export default Drawer;
