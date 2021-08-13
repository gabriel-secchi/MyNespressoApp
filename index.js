
import {AppRegistry} from 'react-native';
import AppRoutes from './app/view/AppRoutes'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppRoutes);
