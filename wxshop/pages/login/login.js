// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      i:0,//控制tab
      show:0,//控制登录的颜色
      admio:{
        mobile:'',//账号和密
        password:''
      },
    bacolor:"#B99CF4"
    
  },

  tab: function (i) {//tab切换
    if (i.currentTarget.id=='left'){
      this.setData({
        i: 0
      });
    }else{
      this.setData({
        i: 1
      });
    }

    
  },
  watchPassWord:function(e){//监听输入
   console.log(e)
   
   this.setData({
     'admio.mobile': e.detail.value
   })
    if (this.data.admio.mobile.length>0){
     this.setData({
       bacolor:'#8B58ED'
     })
    }else{
      this.setData({
        bacolor: '#B99CF4'
      })
    }
  },
goto(){
  console.log('00')
  wx.switchTab({
    url:'../index/index',
    success:function () { }       //成功后的回调；
    
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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