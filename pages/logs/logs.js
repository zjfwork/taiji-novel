Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: true,
        // show:false,
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
        bName: "",
        num: 0,
        readId:1,
    },

    //显示，隐藏
    table: function() {
        this.setData({
            show: !this.data.show
        })
    },
    //上一章 
    last: function() {
        // 注意： this.data.num++ 不能实现加1
        this.setData({
            num: this.data.num - 1 < 0 ? 0 : this.data.num - 1
        })
        console.log(this.data.num)
    },
    //下一章 
    next: function() {
        // 注意： this.data.num++ 不能实现加1
        var maxchaper = this.data.lists[this.data.readId - 1].logs.length - 1;
        this.setData({
            num: this.data.num + 1 > maxchaper ? maxchaper : this.data.num + 1
        })
        console.log(this.data.num)
    },
    // 跳到书架
    gobookshelf: function() {
        wx.switchTab({
            url: '/pages/book/book',
        })
    },
    // 跳到我的页面
    gomy: function() {
        wx.switchTab({
            url: "/pages/my/my"
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("-------onload-------");
        console.log(options); //获取id
        console.log(options.id); //获取id
        this.setData({
            readId: options.id,
        })
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
        // 动态 设置导航栏 的标题
        wx.setNavigationBarTitle({
            // title: this.data.logs[0].bookname,
            title: this.data.lists[this.data.readId-1].bookname,
        })


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