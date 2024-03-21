import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import React from 'react';
import { Text } from 'react-native';

function HomeScreen({ navigation }: BottomTabScreenProps<any>) {
  return <Text>HomeScreen</Text>;
}

export default HomeScreen;
