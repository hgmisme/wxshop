const URL = '..........'  //需要接入的api接
const fetch = require('./fetch.js')
function getbanner(api, path, params, methods){
  return fetch(api, path, params, methods)
}
function getNative(api, path, params, methods){
  return fetch(api,path,params,methods)
}
function getfloor(api, path, params, methods){//楼层
  return fetch(api, path, params, methods)
}
function getfloorgood(api, path, params, methods){//点击楼层进去
  return fetch(api, path, params, methods)
}
module.exports = { getbanner, getNative, getfloor, getfloorgood}