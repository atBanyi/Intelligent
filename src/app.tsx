<<<<<<< HEAD
import type {Settings as LayoutSettings} from '@ant-design/pro-layout';
import {SettingDrawer} from '@ant-design/pro-layout';
import {PageLoading} from '@ant-design/pro-layout';
import type {RunTimeLayoutConfig} from 'umi';
import {history, Link} from 'umi';
import RightContent from '@/components/RightContent';
// import Footer from '@/components/Footer';
import {currentUser as queryCurrentUser} from './services/ant-design-pro/api';
import {BookOutlined, LinkOutlined} from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import {RequestConfig} from "umi";
import {ResponseError} from 'umi-request'
import {notification} from "antd";
import CustomFooter from "@/components/CustomFooter";

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading/>,
};

/**
 * 初始化用户的一些信息
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  /**  defaultSettings.tsx 文件暴露出的一些配置 */
  settings?: Partial<LayoutSettings>;
  /** 获取的用户信息 */
  currentUser?: API.CurrentUser;
  loading?: boolean;
  /** 如果可以拿到用户信息，返回值是用户信息，如果拿不到用户信息，强制跳转登录页面。*/
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  // 获取用户基本信息
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      // 如果拿不到返回登录页面
=======
import Footer from '@/components/Footer';
import { Question, SelectLang } from '@/components/RightContent';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import React from 'react';
import { AvatarDropdown, AvatarName } from './components/RightContent/AvatarDropdown';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
// 业务中的加载
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
<<<<<<< HEAD
  if (history.location.pathname !== loginPath) {
=======
  const { location } = history;
  if (location.pathname !== loginPath) {
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
<<<<<<< HEAD
      settings: defaultSettings,
=======
      settings: defaultSettings as Partial<LayoutSettings>,
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
    };
  }
  return {
    fetchUserInfo,
<<<<<<< HEAD
    settings: defaultSettings,
=======
    settings: defaultSettings as Partial<LayoutSettings>,
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
<<<<<<< HEAD
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  return {
    // 清空所有默认配置
    pure:false,
    // 自定义右头部的render方法
    rightContentRender: () => <RightContent/>,
    disableContentMargin: false,
    // 配置水印
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    // 引用自定义页脚方法
    footerRender: () =><CustomFooter/>,
    // 页面切换时触发
    onPageChange: () => {
      const {location} = history;
=======
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
<<<<<<< HEAD
    // 显示菜单右下角的快捷操作
    links: isDev
      ? [
        <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
          <LinkOutlined/>
          <span>OpenAPI 文档</span>
        </Link>,
        <Link to="/~docs" key="docs">
          <BookOutlined/>
          <span>业务组件文档</span>
        </Link>,
      ]
=======
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
<<<<<<< HEAD
    childrenRender: (children, props) => {
=======
    childrenRender: (children) => {
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
<<<<<<< HEAD
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
=======
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              setInitialState((preInitialState) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
        </>
      );
    },
    ...initialState?.settings,
  };
};

<<<<<<< HEAD
const errorHandler = (error: ResponseError) => {
    // 国际化方法
    // const { messages } = getIntl(getLocale());
    // const { response } = error;
    // 错误原因
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
    throw error;
  }
const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const authHeader = { Authorization: 'Bearer xxxxxx' };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};
// 请求拦截器
export const request: RequestConfig = {
  errorHandler,
  // 新增自动添加AccessToken的请求前拦截器
  requestInterceptors: [authHeaderInterceptor],
=======
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
};
