// 发送请求
/*
fetch('/api/tool').then((res)=>{
  return  res.json()
}).then((res)=>{
  console.log(res)
})
*/
import {request} from 'umi';
// 封装请求方法
export async function getToolsData(params: any) {
  return request('/api/tool', {
    method: 'GET',
    data: params,
  });
}
