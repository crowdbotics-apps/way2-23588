import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps188772Navigator from '../features/Maps188772/navigator';
import Settings188750Navigator from '../features/Settings188750/navigator';
import Settings188735Navigator from '../features/Settings188735/navigator';
import NotificationList188734Navigator from '../features/NotificationList188734/navigator';
import Maps188733Navigator from '../features/Maps188733/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps188772: { screen: Maps188772Navigator },
Settings188750: { screen: Settings188750Navigator },
Settings188735: { screen: Settings188735Navigator },
NotificationList188734: { screen: NotificationList188734Navigator },
Maps188733: { screen: Maps188733Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
