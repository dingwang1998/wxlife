const fetch =  require('../../utils/util.js').fetch;

Page({
  data: {
    slides:[],
    categories:[]
  },
  onLoad: function (options){
    fetch('slides').then( res=>{
      this.setData({
        slides:res.data
      })
    })
    fetch('categories').then( res=>{
      this.setData({
        categories: res.data
      })
    })
  }
})
