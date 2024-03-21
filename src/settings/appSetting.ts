import type { AppSetting } from '#/config';

const setting: AppSetting = {
  tabBar: {
    iconSize: 20,
    list: [
      {
        route: 'Home',
        label: '首页',
        iconPath: require('../assets/images/tabBar/home.png'),
        selectedIconPath: require('../assets/images/tabBar/home-hl.png'),
      },
      {
        route: 'Message',
        label: '消息通知',
        iconPath: require('../assets/images/tabBar/message.png'),
        selectedIconPath: require('../assets/images/tabBar/message-hl.png'),
      },
    ],
  },
};

export default setting;
