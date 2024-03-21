import type { StackScreenProps } from '@react-navigation/stack';

import React from 'react';
import { Text } from 'react-native';
import { store } from '@/store';
import { logout } from '@/store/slices/user';
import { reLaunch } from '@/router';
import { BasicPageEnum } from '@/enums/pageEnum';

const handlePress = () => {
  store.dispatch(logout());
  setTimeout(() => {
    reLaunch(BasicPageEnum.LOGIN);
  }, 0);
};

function Other2Screen({ navigation }: StackScreenProps<any>) {
  return <Text onPress={() => handlePress()}>Other2Screen</Text>;
}

export default Other2Screen;
