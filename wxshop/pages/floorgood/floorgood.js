// pages/floorgood/floorgood.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'',//标题
      id:'',
      floorgoods:'',
      url: 'https://app.babyture.com',
     imgurl: 'http://image.babyture.com/bji',//图片地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
     let id=options.id
     let title=options.title
     this.setData({
       title:title
     })


    app.api.getfloorgood(this.data.url, 'bl/homeFloor/product/queryForApp', {
      home_floor_id: id,
user_id: 9396,
page: 1,
pagesize: 30
      }, 'post').then(res => {
      console.log(res)
      this.setData({
        floorgoods: res.data.data.results
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})