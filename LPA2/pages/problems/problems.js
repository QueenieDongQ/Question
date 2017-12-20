// pages/problems/problems.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.problems = [{ id: 0, pType: "blank", title: "testA", placeholder: "AAA" }, { id: 1, pType: "choice", title: "testB", choices: ["BBB","CCC","DDD"] }];
    this.data.problems = {"Gate1": [{ "qId": 0, "title": "A", "state": "RFQ", "output": "Aa" }, { "qId": 1, "title": "B", "state": "RFQ", "output": "Bb" }], "Gate2": [{ "qId": 2, "title": "c", "state": "Kick-off", "output": "Cc" }, { "qId": 3, "title": "D", "state": "Kick-off", "output": "Dd" }, { "qId": 3, "title": "E", "state": "Kick-off", "output": "Ee" }]};
    
    this.data.answers = [];
    this.loadPage();
  },
  loadPage:function(){
    // var problem = this.data.problems[];

    // if(problem.pType=="blank") 
    // {
    //     loadBlank(problem);
    // } 
    // else
    //  {
    //     loadChoice(problem);
    // }
  },
  // loadBlank: function (problem){
  //   var name = problem.title;
  //   var placeHolder = problem.placeholder;

  // },
  // loadChoice: function (problem){
   
  // },
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