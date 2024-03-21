import type { StackScreenProps } from '@react-navigation/stack';

import React from 'react';
import { Text } from 'react-native';
import { store } from '@/store';
import { login } from '@/store/slices/user';
import { reLaunch } from '@/router';
import { BasicPageEnum } from '@/enums/pageEnum';

const handlePress = () => {
  store.dispatch(login());
  setTimeout(() => {
    reLaunch(BasicPageEnum.HOME);
  }, 0);
};

function LoginScreen({ navigation }: StackScreenProps<any>) {
  return <Text onPress={() => handlePress()}>LoginScreen</Text>;
}

export default LoginScreen;
