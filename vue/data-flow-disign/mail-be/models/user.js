var mongoose = require('mongoose')

// login register 

// 	mongodb的优势：包容前期的设计冗余
// 在未来5G，IOT时代，数据不规整，需要动态调整

const userSchema = new mongoose.Schema({
	"userId": String, // 生成唯一ID
	"name": String, // 真实姓名
	"avatar": String, // 头像
	"userName": String, // 账户姓名
	"userPwd": String,
	"cartList": [ // 购物车
		{
			productId: String,
			productImg: String,
			productName: String,
			checked: String,
			productNum: Number,
			productPrice: Number
		}
	],
	'addressList': [
		{
			"addressId": Number,
			"userName": String,
			"streetName": String,
			"tel": Number,
			"isDefault": Boolean
		}
	]
})

module.exports = mongoose.model('User', userSchema)