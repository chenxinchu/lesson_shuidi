// type关键字
type PersonInfoFunc = (user: Person) => string;

interface Person {
	name: string
	age: number
}

const getUserInfos:PersonInfoFunc = (user) => {
  return `name: ${user.name}, age: ${user.age}`;
}

console.log(getUserInfo3({ name: "chencc", age: 18 }))