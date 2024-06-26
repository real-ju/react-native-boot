import type { RouteRecord } from '#/router';

import OtherScreen from '@/screens/Other';

import HomeScreen from '@/screens/Home';
import MessageScreen from '@/screens/Message';

import LoginScreen from '@/screens/Login';

// 应用基础路由
export const basicRoutes: RouteRecord[] = [
  {
    name: 'Other',
    component: OtherScreen,
    public: false,
  },
];

// 应用TabBar路由
export const tabBarRoutes: RouteRecord[] = [
  {
    name: 'Home',
    component: HomeScreen,
    public: false,
  },
  {
    name: 'Message',
    component: MessageScreen,
    public: false,
  },
];

// 应用登录路由
export const loginRoute: RouteRecord = {
  name: 'Login',
  component: LoginScreen,
  public: true,
};
