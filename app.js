//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {

          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }

            }
          })
        }
      }
    })
  },
  
  setGlobalUserInfo: function(user){
    wx.setStorageSync('userInfo', user)
  },
  getGlobalUserInfo: function () {
    return wx.getStorageSync("userInfo");
  },
  globalData: {
    userInfo: null,//微信登录用户信息
    kim_url: "http://localhost:8084/"
  },
  //系统用户信息
  appData: {
    user: {
      id: null,
      username: null,
      realName: null
    },
  },
})