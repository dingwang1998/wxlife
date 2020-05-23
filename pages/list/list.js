
const fetch =  require('../../utils/util.js').fetch;
Page({
  data: {
    shops:[],
    category:[],
    pageindex:0,
    pagesize:10,
    hasMore:true
  },
  createdlist :function(){
    if(!this.data.hasMore) return
    let {pageindex , pagesize} = this.data;
    const parmas = {_page: ++pageindex, limit:pagesize}
    return fetch(`categories/${this.data.category.id}/shops`, parmas)
    .then( res =>{
      const total = parseInt(res.header['x-total-count'])
      const hasMore = pageindex * pagesize < total
      var shops = this.data.shops.concat(res.data)
      this.setData({
          shops,
          pageindex,
          hasMore
      })
      console.log(this.data.shops)
    })
  },
  onLoad: function (options) {
    
    fetch(`categories/${options.id}`).then(res=>{
      this.setData({
        category: res.data
      })
      console.log(res.data)
      wx.setNavigationBarTitle({
        title: this.data.category.name
      })
      this.createdlist();
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
      this.setData({
        shops:[],
        pageindex:0,
        hasMore:true
      })
      this.createdlist().then(()=>{
        wx.stopPullDownRefresh()
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.createdlist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})