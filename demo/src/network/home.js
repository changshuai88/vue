import {request} from './request';

export function getHomeAllData() {
  return request({
    url: '/api/index',
    // method: 'get',
    // params: {}
  })
}
export function add(a,b){
  console.log(a+b);
}
