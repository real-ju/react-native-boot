import type { RouteRecord } from '#/router';

import { loginRoute, basicRoutes as _basicRoutes, tabBarRoutes } from './config';
import TabBarNavigator from '@/navigators/TabBar';
import { store } from '@/store';
import { BasicPageEnum } from '@/enums/pageEnum';
import { createNavigationContainerRef } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef();

const basicRoutes: RouteRecord[] = [
  // 顺序不能打乱
  {
    name: 'TabBarNavigator',
    component: TabBarNavigator,
    public: false,
  },
  loginRoute,
  ..._basicRoutes,
];

/**
 * 检查用户权限
 * @param routeName 跳转的路由名
 */
const checkPermission = (routeName: string) => {
  const state = store.getState();
  const isLogin = state.user.isLogin;
  let currentRoute = basicRoutes.find(item => {
    return item.name === routeName;
  });
  if (!currentRoute) {
    currentRoute = tabBarRoutes.find(item => {
      return item.name === routeName;
    });
  }
  if (!currentRoute) {
    return true;
  } else {
    if (currentRoute.public) {
      return true;
    } else {
      if (isLogin) {
        return true;
      } else {
        reLaunch(BasicPageEnum.LOGIN);
        return false;
      }
    }
  }
};

/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param name 路由名
 */
const reLaunch = (name: string) => {
  if (checkPermission(name)) {
    if (navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
    // 在TabBar中查找路由记录
    const record = tabBarRoutes.find(item => {
      return item.name === name;
    });
    if (record) {
      navigationRef.dispatch(StackActions.replace('TabBarNavigator', { screen: name }));
    } else {
      navigationRef.dispatch(StackActions.replace(name));
    }
  }
};

/**
 * 跳转到tabBar页面
 * @param name 路由名
 */
const switchTab = (name: string) => {
  if (checkPermission(name)) {
    navigationRef.navigate('TabBarNavigator', { screen: name });
  }
};

/**
 * 保留当前页面，跳转到应用内的某个页面
 * @param name 路由名
 */
const navigateTo = (name: string) => {
  if (checkPermission(name)) {
    navigationRef.dispatch(StackActions.push(name));
  }
};

/**
 * 关闭当前页面，跳转到应用内的某个页面
 * @param name 路由名
 */
const redirectTo = (name: string) => {
  if (checkPermission(name)) {
    navigationRef.dispatch(StackActions.replace(name));
  }
};

/**
 * 关闭当前页面，返回上一页面或多级页面
 * @param name 路由名
 * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 */
const navigateBack = (delta: number = 1) => {
  for (let index = 0; index < delta; index++) {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    } else {
      break;
    }
  }
};

export { basicRoutes, tabBarRoutes, reLaunch, switchTab, navigateTo, redirectTo, navigateBack };
