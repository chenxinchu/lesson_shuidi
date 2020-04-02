# 浅聊箭头函数
## 箭头函数很简便，但是功能也简化了
1. 箭头函数没有this  作用域查找 父级this
arrow function 缺了很多东西

- super 关键字 举出应用场景  
  super 是继承关系里的
	```
	Class Persion{
		consturctor(){
			super()  // 执行父类方法
		}
	}
	```
	函数 super arguments this

对象间继承的新方法: Object.setPrototypeOf(childObject,FatherObject)  

2. 箭头函数没有super关键字 ('super' keyword unexpected here)   

3. 箭头函数不适合用来做构造函数，new.target没有用  


js一切皆对象  对象 与 函数 如何区分？  

对象有__proto__属性 原型对象   
函数有prototype属性   
生成对象时，对象的__proto__属性指向函数的prototype属性   
![](./a.png)  

5. 箭头函数是不可以被new的，