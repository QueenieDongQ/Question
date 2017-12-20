// pages/layer_check/layer_check.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qData:'',
    projects: ['project1', 'project2'],
    products: ['prodect1','product2','product3'],
    pNos:['n1','n2','n3']
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      project: this.data.projects[val],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that =this;
    console.log('onLoad');
    wx.request({
      url: 'https://fduxiao.github.io/xiaotools/questions.json',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          qData: res.data
        }); 
      }
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