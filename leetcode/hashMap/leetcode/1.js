var hash = function(key){
	let len = key.length
	return key.substr(len-2,len)
}
console.log(hash('030340'));
	