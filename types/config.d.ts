import type { ImageSourcePropType } from 'react-native';

interface TabBarItem {
  // 匹配路由name
  route: string;
  // tab显示名称
  label: string;
  // 图标路径
  iconPath: ImageSourcePropType;
  // 选中图标路径
  selectedIconPath: ImageSourcePropType;
}

export interface AppSetting {
  tabBar: {
    // 图标大小
    iconSize: number;
    // 列表
    list: TabBarItem[];
  };
}
