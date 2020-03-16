const mongoose = require('mongoose')

const shopScheam = new mongoose.Schema({
	name: {
		type: String,
		required: true, // 必填
		index: true
	},
	location: {
		type: [Number],  // [113.34,23.65]
		index: "2d", // 索引 
		sparse: true
	}
})

const Shop=mongoose.model('Shop',shopScheam)
module.exports=Shop