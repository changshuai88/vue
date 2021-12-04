import axios from 'axios';

export function requset(config) {
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    // baseURL: 'https://api.apiopen.top/',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config=>{
    //如果有一些接口需要认证才可以访问，就在这里统一设置

    //直接放行
    return config;
  },err=>{
    //错误处理
    console.log('请求失败');
  })
  //响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data ? res.data : res;
  },err=>{
    //如果有需要授权才可以访问的接口，同意跳转至登录界面
    //如果有错，这里会去处理，显示错误信息
  })

  return instance(config);
}
