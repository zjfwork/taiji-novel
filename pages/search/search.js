// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lists: [], // 接收搜索的内容
        wxSearchData: '', // 输入的值
        arr: [{
                id: 1,
                img: "../../images/139s.jpg",
                bookname: "元尊",
                author: "天蚕土豆",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。"
            },
            {
                id: 2,
                img: "../../images/399s.jpg",
                bookname: "飞剑问道",
                author: "我吃西红柿",
                bookinfo: "在这个世界,有狐仙、河神、水怪、大妖,也有求长生的修行者。修行者们开法眼，可看妖魔鬼怪。炼一口 飞剑，可千里杀敌。千理眼、顺风耳，可探查訪。......秦府二公子秦云便是一位修行者...."
            },
            {
                id: 3,
                img: "../../images/563s.jpg",
                bookname: "凡人修仙传仙界篇",
                author: "忘语",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。"
            },
            {
                id: 4,
                img: "../../images/22171s.jpg",
                bookname: "圣墟",
                author: "辰东",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。"
            },
            {
                id: 1,
                img: "../../images/139s.jpg",
                bookname: "元尊",
                author: "天蚕土豆",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。"
            },
            {
                id: 2,
                img: "../../images/399s.jpg",
                bookname: "飞剑问道",
                author: "我吃西红柿",
                bookinfo: "在这个世界,有狐仙、河神、水怪、大妖,也有求长生的修行者。修行者们开法眼，可看妖魔鬼怪。炼一口 飞剑，可千里杀敌。千理眼、顺风耳，可探查訪。......秦府二公子秦云便是一位修行者...."
            },
            {
                id: 3,
                img: "../../images/563s.jpg",
                bookname: "凡人修仙传仙界篇",
                author: "忘语",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。"
            },
            {
                id: 4,
                img: "../../images/22171s.jpg",
                bookname: "圣墟",
                author: "辰东",
                bookinfo: "天地为炉，万物为铜，阴为炭,造化为工。气运之争，蟒雀吞龙。镜是蟒雀为尊，还圣龙崛起，驾众生?这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。间源纷九品，三品称玄,六品成天,九品号圣。吾有一口玄黄气，可吞天地日月星。"
            },
        ],
    },

    wxSearchInput: function(options) {
        console.log(options);
        console.log(options.detail);
        // console.log(options.detail.value);
        // console.log(this.data.arr.bookname);//indefined
        var gg = options.detail.value;
        console.log("输入的值：", gg);
        var newArr = []
        this.data.arr.forEach((item, index) => {
            // console.log(item, index);

            if (item.bookname.indexOf(gg) != -1) {
                // console.log(item.bookname.indexOf(gg))
                console.log("aaa")
                console.log(item);
                console.log(index);
                newArr.push(item);
                if (gg != "") {
                    this.setData({
                        lists: newArr
                    })
                } else {
                    this.setData({
                        lists: []
                    })
                }

            } else {
                console.log("bbb")
            }
        });
        // return newArr;
        // this.setData({
        //     lists: newArr
        // })

        // var gg = options.detail.value;
        // if(gg == this.data.arr.bookname){
        //     console.log("aaa")
        // }else{
        //     console.log("bbb")
        // }
        console.log(this.data.lists)
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