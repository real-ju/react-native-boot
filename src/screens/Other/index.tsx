import type { StackScreenProps } from '@react-navigation/stack';

import React from 'react';
import { Text } from 'react-native';
import { navigateTo } from '@/router';

const handlePress = () => {
  navigateTo('Other2');
};

function OtherScreen({ navigation }: StackScreenProps<any>) {
  return <Text onPress={() => handlePress()}>OtherScreen</Text>;
}

export default OtherScreen;
