//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    url:'https://app.babyture.com',
    path:'bl/homeActivity/queryForApp',
    methods:'get',
    parmas:{
      city_id: '1',
      activity_type: ''
      
    },
    swperImg:'',//轮播图
    imgurl:'http://image.babyture.com/bji',//图片地址
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    nativeimg:'',//navive

    floordata:'',//楼层
  },
  onLoad:function(){
    
    app.api.getbanner(this.data.url, this.data.path, this.data.parmas, this.data.methods).then(res=>{//轮播图
      this.setData({
        swperImg:res.data.data
      })
      });
    app.api.getNative(this.data.url, 'bl/homeHotkey/queryForApp', { city_id:'1'}, this.data.methods).then(res=>{//八个小按钮
      console.log(res)
      if (res.data.resultCode==1000){
        console.log(res)
        this.setData({
          nativeimg:res.data.data
        })
      }
    })

    app.api.getfloor(this.data.url, '/bl/homeFloor/queryForApp', { city_id: '1' }, this.data.methods).then(res=>{
      console.log(res)
       this.setData({
         floordata:res.data.data
       })
    })
  },
  floorgood:function(e){
    console.log(e)
    let dataid = e.currentTarget.dataset.image.id
    let datatitle=e.currentTarget.dataset.image.floor_title
    wx.navigateTo({
      url: '../floorgood/floorgood?id=' + dataid + "&title=" + datatitle
    })
  }

 
})
