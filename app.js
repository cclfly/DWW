App({
    onLaunch: function(){
        var that = this;
        wx.login({
            success: function(res){
                wx.request({
                    url: 'https://wxapp.cclfly.cc/tools/wxcode2openid.php',
                    data: {code: res.code},
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    header: {'content-type': 'application/json'}, // 设置请求的 header
                    success: function(res){
                        //console.log(res.data.openid);
                        that.m_info.wxoid = res.data.openid;
                    }
                })
                wx.showToast({
                    title:    '登录成功',
                    icon:     'success',
                    duration: 2000
                });
            }
        });
    },
    onShow:   function(){},
    onHide:   function(){},
    m_info:   {}    //用户数据，跟随应用周期
});