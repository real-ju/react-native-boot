import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from '@/App';
import { name as appName } from './app.json';

function bootstrap() {
  AppRegistry.registerComponent(appName, () => App);
}

bootstrap();
