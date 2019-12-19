## docker 基本概念
- mongodb nosql 数据库 
- Docker 集装箱 一家公司的开发环境迅速上线的核武器 解决了开发环境问题 
- docker pull image 
  镜像  
- mongodb chen$ docker run -p 27017:27017 --name mongo -d 18400f87db91
  运行镜像 -p 端口 --name 运行容器的名字  
- docker ps -a 查看正在运行的容器
- docker exec -it mongo mongo 
  -it 命令行的交互 mongo 镜像 mongo -it交互的脚本
  docker 是简版的linux 


## mongodb shell交互
- use tutorial; 新建一个
- db.users.insert({username:'smith'});
- db.users.find({});
- db.users.find({username:'smith'});
- db.users.find({_id:ObjectId("5df9d5dc9d5bd44cee08eaf1")});
- db.users.find({ 
    $and:[ 
        {_id:ObjectId("5df9d5dc9d5bd44cee08eaf1")}, 
        {username:'jones'}
    ]
  });
- db.users.find({ 
    $or:[ 
        {username:'smith'}, 
        {username:'jones'} 
    ] 
  })
- db.users.update(
    {"county":"Canada"},
    {
      $set:
          {username:"smith"}
    })
- db.users.find().pretty();
- db.numbers.find({ num: { "$gt":1998 }}).explain("executionStats");
- db.numbers.createIndex({num:1}) 
- b.numbers.getIndexes();