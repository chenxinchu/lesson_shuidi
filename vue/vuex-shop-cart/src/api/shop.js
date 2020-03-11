const _products = [
	{
		"id": 1,
		"title": "Ipad4 Mini",
		"price": 500.01,
		"inventory": 2
	},
	{
		"id": 2,
		"title": "H&M",
		"price": 10.99,
		"inventory": 10
	},
	{
		"id": 3,
		"title": "Charli",
		"price": 19.99,
		"inventory": 5
	}
]
export default {
	// backend  callback
	getProducts(cb) {
		setTimeout(() => {
			// 模拟ajax
			cb(_products);
		}, 1000)
	}
}