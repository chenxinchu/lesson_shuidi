// 围绕状态，设计改变
// user cartList products
import {
	RECORD_USERINFO,
	ADD_CART,
	INCREMENT_QUANTITY,
	CHECKOUT
} from './mutation-types'

export default {
	[RECORD_USERINFO](state, info) { // 注册用户信息
		state.userInfo = info
		state.login = true
	},
	// cartList?
	[ADD_CART](state, { productId }) {

	},
	// edit_cart(state) {},
	[INCREMENT_QUANTITY](state) {

	},
	[CHECKOUT]() {

	}
}