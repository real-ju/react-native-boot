import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { basicRoutes } from '@/router';
import { useAppSelector } from '@/store';

const Stack = createStackNavigator();

/**
 * 应用基础Stack导航器
 */
function BasicNavigator() {
  const isLogin = useAppSelector(state => state.user.isLogin);
  const routes = basicRoutes.filter(record => {
    return isLogin ? true : record.public;
  });
  const screenEls = routes.map(item => {
    return <Stack.Screen key={item.name} name={item.name} component={item.component} />;
  });
  return <Stack.Navigator screenOptions={{ headerShown: false }}>{screenEls}</Stack.Navigator>;
}

export default BasicNavigator;
