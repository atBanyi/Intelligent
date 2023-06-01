<<<<<<< HEAD
import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
=======
import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
