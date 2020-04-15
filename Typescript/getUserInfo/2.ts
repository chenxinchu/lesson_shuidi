interface Person {
	name: string
	age: number
}

const getUserInfo2 = function (user: { name: string, age: number }) { // 参数类型随意
	return `name:${user.name}, age:${user.age}`
}

console.log(getUserInfo2({ name: "chencc", age: 18 }))