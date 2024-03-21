import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarRoutes, switchTab } from '@/router';
import { Image, Text } from 'react-native';
import appSetting from '@/settings/appSetting';

const Tab = createBottomTabNavigator();

/**
 * 应用TabBar导航器
 */
function TabBarNavigator() {
  const screenEls = tabBarRoutes.map(item => {
    return <Tab.Screen key={item.name} name={item.name} component={item.component} />;
  });

  // 获取传入tabBarIcon的工厂函数
  const getTabBarIconFactory = (route: any) => {
    const { tabBar } = appSetting;
    const currentTab = tabBar.list.find(item => {
      return item.route === route.name;
    });
    // 这里返回的不是组件
    // eslint-disable-next-line react/no-unstable-nested-components
    return ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
      return currentTab ? (
        <Image
          source={focused ? currentTab.selectedIconPath : currentTab.iconPath}
          style={{ width: tabBar.iconSize, height: tabBar.iconSize }}
        />
      ) : (
        <Text>无</Text>
      );
    };
  };

  // 获取传入tabBarLabel的工厂函数
  const getTabBarLabelFactory = (route: any) => {
    const { tabBar } = appSetting;
    const currentTab = tabBar.list.find(item => {
      return item.route === route.name;
    });
    return currentTab ? currentTab.label : '无';
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        headerShown: false,
        tabBarIcon: getTabBarIconFactory(route),
        tabBarLabel: getTabBarLabelFactory(route),
      })}
      screenListeners={({ navigation }) => ({
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
          const targetTabName = e.target?.split('-')[0];
          if (targetTabName) {
            switchTab(targetTabName);
          }
        },
      })}>
      {screenEls}
    </Tab.Navigator>
  );
}

export default TabBarNavigator;
