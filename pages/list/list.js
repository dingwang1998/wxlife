
const fetch =  require('../../utils/util.js').fetch;
Page({
  data: {
    shops:[],
    category:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    fetch(`categories/${options.id}`).then(res=>{
      this.setData({
        category: res.data
      })
      console.log(res.data)
      wx.setNavigationBarTitle({
        title: this.data.category.name
      })
      return fetch(`categories/${this.data.category.id}/shops`,{_page:1, limit:10})
    })
    .then( res =>{
      this.setData({
          shops:res.data
      })
      console.log(this.data.shops)
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