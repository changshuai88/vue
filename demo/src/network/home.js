import {request} from './request';

export function getHomeAllData() {
  return request({
    url: '/api_pdo.php',
    // method: 'get',
    // params: {}
  })
}
// export function add(a,b){
//   console.log(a+b);
// }
