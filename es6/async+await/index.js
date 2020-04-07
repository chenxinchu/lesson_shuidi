let p = Promise.resolve(1);
let p2 = new Promise((resolve) => {
	setTimeout(() => {
		resolve(234)
	}, 2000)
})
function* test() {
	let a = yield p;
	console.log(a)
	let b = yield p2;
	console.log(b);
}

function asyncTogen(gen) {
	let g = gen()
	function step(value) {
		let info = g.next(value)
		if (info.done) {
			return
		} else {
			Promise.resolve(info.value).then((res) => {
				// 下一个yield
				step(res)
			})
		}
	}
	step()
}
asyncTogen(test)