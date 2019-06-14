module.exports=function(api,path,params,mthods){
  return new Promise((resolve, reject) => {
    wx.request({
      url:`${api}/${path}`,
      method: mthods,
      data:params,
      header: { "Content-Type": "application/x-www-form-urlencoded"},
      success:resolve,
      fail:reject
    })
  })
}