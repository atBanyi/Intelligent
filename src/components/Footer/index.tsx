<<<<<<< HEAD
import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
=======
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
<<<<<<< HEAD
    defaultMessage: '中国软件杯大赛',
=======
    defaultMessage: '蚂蚁集团体验技术部出品',
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
<<<<<<< HEAD
=======
      style={{
        background: 'none',
      }}
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
