function Page() {
	// console.log(this);
	// 1: create {}
	// 2: {}继承百Page.prototype .
	// 3:this === {}
	//4:看Page返回一个对象?返回的对象就是new的结果:返回{} (三元操作)
	return this.hosts;
}
Page.hosts = ['h11111'];
Page.prototype.hosts = [' h22222'];
var p1 = new Page();
var p2 = Page();
console.log(p1);
console.log(p2);