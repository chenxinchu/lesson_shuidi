// nb email 正则表达式
// 754211506@qq.com
console.log(/^[\w-]+@[\w]+\.[\w]+$/.test("2314654763@163.com")); 
// + 表示至少出现一次   \w 表示A~Z,a~z,0~9,_ 中任意一个
// .表示匹配除\n之外的任意字符 若要匹配. 则可以用 \. \表示转义字符 

// 2314654763@163.com 和 abc2019@sina.com.cn 一定要匹配到.
// (\.[\w]+)+ 整体再匹配多次
console.log(/^[\w-]+@[\w]+(\.[\w]+)+$/.test("abc2019@sina.com.cn")); 
console.log(/^[\w-]+@[\w]+\.[\w]+$/.test("2314654763@163.com")); 


