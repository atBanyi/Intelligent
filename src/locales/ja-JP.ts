<<<<<<< HEAD
import globalHeader from './ja-JP/globalHeader';
import menu from './ja-JP/menu';
import settingDrawer from './ja-JP/settingDrawer';
import settings from './ja-JP/settings';
import pwa from './ja-JP/pwa';
import component from './ja-JP/component';
import pages from './ja-JP/pages';
=======
import component from './ja-JP/component';
import globalHeader from './ja-JP/globalHeader';
import menu from './ja-JP/menu';
import pages from './ja-JP/pages';
import pwa from './ja-JP/pwa';
import settingDrawer from './ja-JP/settingDrawer';
import settings from './ja-JP/settings';
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1

export default {
  'navBar.lang': '言語',
  'layout.user.link.help': 'ヘルプ',
  'layout.user.link.privacy': 'プライバシー',
  'layout.user.link.terms': '利用規約',
  'app.preview.down.block': 'このページをローカルプロジェクトにダウンロードしてください',
  'app.welcome.link.fetch-blocks': '',
  'app.welcome.link.block-list': '',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
