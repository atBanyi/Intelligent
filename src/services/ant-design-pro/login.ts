// @ts-ignore
/* eslint-disable */
<<<<<<< HEAD
import { request } from 'umi';
=======
import { request } from '@umijs/max';
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
<<<<<<< HEAD
export async function accountLogin(params:any) {
  return request('/user/login/login'),{
    method:'POST',
    data:params
  }
}
=======
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
