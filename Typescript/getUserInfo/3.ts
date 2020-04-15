interface Person {
	name: string
	age: number
}
const getUserInfo3 = (user: Person):string => { // 参数类型随意
	return `name:${user.name}, age:${user.age}`
}

console.log(getUserInfo3({ name: "chencc", age: 18 }))