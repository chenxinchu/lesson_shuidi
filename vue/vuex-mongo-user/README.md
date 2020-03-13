1. 数据流通
	数据绑定 -> 数据流
	- mongodb -> api ->	vuex -> component
	- 应用场景 vuex 设计思考  
	mongodb 索引

2. 流

3. mongodb 检索

db.users.find({tags: 'coding'}).explain("executionStats");  
"stage" : "COLLSCAN",   collectionScan  检索整个的collction  
"totalDocsExamined" : 4,   
  "totalKeysExamined" : 0,  没有利用上任何一个索引  

100万用户  查询就是慢下来？   
为tags 集合建立一个索引  
vuex mutations actions   
db.users.ensureIndex({"tags":1});  
db.users.getIndexSpecs();   
db.users.dropIndex("")  