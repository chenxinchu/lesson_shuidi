## 	前端工作流 fe workflow    webpack 

- webpack配置移步坤哥文章，6个知识点 能保证二线面试需求
- webpack + 架构
	1. 源头 package.json, webpack 不直接出场？   
	cross-env 服务器无差别环境变量配置 node npm 都用哪些？  
	并行同时考虑工作流架构  
	将编译工作(工作流) 通过目录
	2. webpack 重要性  
	3. base.js 同时服事侍 dev.js build.js  
	模块化 把基础配置做好，向外输出，
	4. webpack 其他的module及插件如何处理？  
	config.js
	5. lib 把module 放在config 目录 一个文件一件事  
	findSync 把所有 js 文件 组成数组输出出来
	6. 可拔插的webpack插件  打包器  最终产品
	- babel化 JS TS
	- css压缩 stylus -> css  
		postcss
	- htmltemplate

webpack 	通过module将编译的事物 可拔插的load 进行相应的模块化处理  
webpack + 其他模块的生态链，占据了工作流的生态位  
webpack module 配置模块  
在每一个模块中有配置的流程
1. test  /.js$/
2. loader 
3. 配置项
webpack-chain js化  
ts 和 js 是一家，ts是js的超集，  
ts 是有类型声明的js ，降低js出错率
let a:string = '123'  a=true
