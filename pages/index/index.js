Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: ['../../images/ban1.jpg', '../../images/ban2.jpg', '../../images/ban3.jpg', '../../images/ban4.jpg'],
        indicatorDots: true,
        vertical: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        lists: [{
                id: 1,
                img: "../../images/139s.jpg",
                bookname: "元尊",
                author: "天蚕土豆",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。",
                logs: [{
                        chaper: "第一章",
                        content: "元尊第一章aaaaa"
                    },
                    {
                        chaper: "第二章",
                        content: "元尊第二章bbbbbb"
                    },
                    {
                        chaper: "第三章",
                        content: "元尊第三章cccccc"
                    },
                ]
            },
            {
                id: 2,
                img: "../../images/399s.jpg",
                bookname: "飞剑问道",
                author: "我吃西红柿",
                bookinfo: "在这个世界,有狐仙、河神、水怪、大妖,也有求长生的修行者。修行者们开法眼，可看妖魔鬼怪。炼一口 飞剑，可千里杀敌。千理眼、顺风耳，可探查訪。......秦府二公子秦云便是一位修行者....",
                logs: [{
                        chaper: "第一章",
                        content: "飞剑问道第一章aaaaa"
                    },
                    {
                        chaper: "第二章",
                        content: "飞剑问道第二章bbbbbb"
                    },
                    {
                        chaper: "第三章",
                        content: "飞剑问道第三章cccccc"
                    },
                ]
            },
            {
                id: 3,
                img: "../../images/563s.jpg",
                bookname: "凡人修仙传仙界篇",
                author: "忘语",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。",
                logs: [{
                        chaper: "第一章",
                        content: "凡人修仙传仙界篇第一章aaaaa"
                    },
                    {
                        chaper: "第二章",
                        content: "凡人修仙传仙界篇第二章bbbbbb"
                    },
                    {
                        chaper: "第三章",
                        content: "凡人修仙传仙界篇第三章cccccc"
                    },
                ]
            },
            {
                id: 4,
                img: "../../images/22171s.jpg",
                bookname: "圣墟",
                author: "辰东",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。",
                logs: [{
                        chaper: "第一章",
                        content: "圣墟第一章aaaaa"
                    },
                    {
                        chaper: "第二章",
                        content: "圣墟第二章bbbbbb"
                    },
                    {
                        chaper: "第三章",
                        content: "圣墟第三章cccccc"
                    },
                ]
            },
        ],
        arr1: [{
                img: "../../images/139s.jpg",
                bookname: "元尊",
            },
            {
                img: "../../images/399s.jpg",
                bookname: "飞剑问道",
            },
            {
                img: "../../images/563s.jpg",
                bookname: "凡人修仙传仙界篇",
            },
            {
                img: "../../images/22171s.jpg",
                bookname: "圣墟",
            },
            {
                img: "../../images/139s.jpg",
                bookname: "元尊",
            },
            {
                img: "../../images/399s.jpg",
                bookname: "飞剑问道",
            },
        ]
    },

    //跳到搜索页面
    gosearch: function() {
        wx.navigateTo({
            url: "/pages/search/search",
        })
    },
    //回到顶部
    goTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})