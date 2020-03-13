// pages/book/book.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookshelf:[]
    },


    clearbook(){
        wx.removeStorageSync("addbook");
        this.setData({
            bookshelf:[]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log("-------onLoad----------");
        // var getbook = wx.getStorageSync("addbook");
        // console.log("getbook", getbook)

        // this.data.bookshelf.push(getbook)
        // // var aaa = this.data.bookshelf.push(getbook);
        // // console.log(aaa)
        // var aaa = this.data.bookshelf;
        // // console.log(this.data.bookshelf.push(getbook))
        // console.log(this.data.bookshelf)
        // this.setData({
        //     bookshelf: aaa
        // })
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
        console.log("-------onshow----------");
        var getbook = wx.getStorageSync("addbook");
        console.log("getbook", getbook)

        // this.data.bookshelf.push(getbook)
        // // var aaa = this.data.bookshelf.push(getbook);
        // // console.log(aaa)
        // var aaa = this.data.bookshelf;
        // // console.log(this.data.bookshelf.push(getbook))
        // console.log(this.data.bookshelf)
        this.setData({
            bookshelf: getbook
        })

        // wx.removeStorageSync("addbook");

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