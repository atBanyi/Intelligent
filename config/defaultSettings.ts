<<<<<<< HEAD
import { Settings as LayoutSettings } from '@ant-design/pro-layout';
const Settings: LayoutSettings & {
=======
import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
<<<<<<< HEAD
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  // 是否固定到header到顶部
  fixedHeader: false,
  // 是否固定导航栏
  fixSiderbar: true,
  // 全局过滤镜------> 色弱模式是否开启
  colorWeak: false,
  // 标题
  title: 'IntelligentOffice',
  pwa: false,
  // 左侧标题的logo
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // logo: logo,
  iconfontUrl: '',
=======
  colorPrimary: '#4a84c9',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  // 设置标题的 title
  title: 'Chat Intelligence App',
  pwa: true,
  // // 修改左上角的 logo
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
};

export default Settings;
