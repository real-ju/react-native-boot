import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import React from 'react';
import { Text } from 'react-native';
import { navigateTo } from '@/router';

const handlePress = () => {
  navigateTo('Other');
};

function MessageScreen({ navigation }: BottomTabScreenProps<any>) {
  return <Text onPress={() => handlePress()}>MessageScreen</Text>;
}

export default MessageScreen;
