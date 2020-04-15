const getUserInfo1 =function(user) { // 参数类型随意
	return `name:${user.name}, age:${user.age}`
}
var user = {name:"chencc"}
console.log(getUserInfo1(user))