// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailArr: {
            id: 1,
            img: "../../images/139s.jpg",
            bookname: "元尊",
            author: "天蚕土豆",
            category: "东方玄幻",
            number: 2718925,
            latest: "第一干零七十三章天柱峰",
            introduction: "天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气, 可吞天地日月星。"
        },
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
        ],

        aaa: [{
                id: 1,
                img: "../../images/139s.jpg",
                bookname: "元尊",
                author: "天蚕土豆",
                category: "东方玄幻",
                number: 2718925,
                latest: "第一干零七十三章天柱峰",
                introduction: "天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气, 可吞天地日月星。"
            },
            {
                id: 2,
                img: "../../images/399s.jpg",
                bookname: "飞剑问道",
                author: "我吃西红柿",
                category: "东方玄幻",
                number: 2718925,
                latest: "第一干零七十三章天柱峰",
                introduction: "天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气, 可吞天地日月星。"
            },
            {
                id: 3,
                img: "../../images/563s.jpg",
                bookname: "凡人修仙传仙界篇",
                author: "忘语",
                category: "东方玄幻",
                number: 2718925,
                latest: "第一干零七十三章天柱峰",
                introduction: "天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气, 可吞天地日月星。"
            },
            {
                id: 4,
                img: "../../images/22171s.jpg",
                bookname: "圣墟",
                author: "辰东",
                category: "东方玄幻",
                number: 2718925,
                latest: "第一干零七十三章天柱峰",
                introduction: "天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气, 可吞天地日月星。"
            },
        ],
        readId:0,
    },

    //开始阅读
    goread: function(options) {
        console.log("-------goread-------");
        console.log(this.data.readId);
        wx.navigateTo({
            url: '/pages/logs/logs?id=' + this.data.readId,
        })
    },

    // 加入书架
    addbookshelf: function() {

        var bookdata = {
            id: this.data.detailArr.id,
            img: this.data.detailArr.img,
            bookname: this.data.detailArr.bookname,
        }

        console.log(bookdata);

        var addbook = wx.getStorageSync("addbook");
        if (addbook) { //有数据,
            var flag = true;
            for (var i = 0; i < addbook.length; i++) {
                if (addbook[i].id == bookdata.id) { //有相同数据
                    flag = false;
                }
            }
            if (flag) {
                addbook.push(bookdata);
            }
            wx.setStorageSync("addbook", addbook);

        } else { //没有数据, 添加数据
            wx.setStorageSync("addbook", [bookdata]);
        }
        console.log("addbook:", addbook);
    },

    //我的书架
    gobookshelf: function() {
        wx.switchTab({
            url: '/pages/book/book',
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
        console.log("-------onload-------");
        console.log(options); //获取id
        console.log(options.id); //获取id
        this.setData({
            detailArr: this.data.aaa[options.id-1],
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