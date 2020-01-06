const mongoose = require('mongoose'), // 数据库驱动
    Schema = mongoose.Schema;
// 数据结构
const articlesSchema = new Schema({
    title: String,
    date: Date,
    content: String
});
const linkSchema = new Schema({
    name: String,
    href: String,
    nwePage: Boolean
})
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    emailCode: String,
    createdTime: Number,
    articles: [articlesSchema],
    links: [linkSchema]
});
// 对数据库对象的抽象 ORM 
// 操作数据库更容易
const User = mongoose.model('User', userSchema);
// 最耗性能 IO开销
mongoose.connect('mongodb://192.168.31.128:27017/test');
let db = mongoose.connection;
db.on('error', function () {
    console.log('error');
});
db.once('open', function () {
    console.log('db opened');
});

// // model mvc
// new User({
//     name: 'cc',
//     password: '123456',
//     email: '1742692285@qq.com',
//     emailCode: '123456',
//     createdTime: Date.now(),
//     articles: []
// }).save(function(err){

// });

// User.findOne({email:'1742692285@qq.com'},function(err,doc){
//     if(err){
//         return console.log(err);
//     }
//     console.log(doc);
// });

// User.findOne({name:'cc'},function(err,doc){
//     // if(doc){
//     //     const article = {
//     //         title:'小黄书',
//     //         date:new Date(),
//     //         connect:'好书'
//     //     };
//     //     doc.articles.push(article);
//         doc.save(function(err){
//             if(err) return console.log(err);
//             console.log(doc);
//         })
//     }
// })

User.findOne({ name: 'cc' }, function (err, doc) {
    if (err) {
        return console.log(err);
    } else if (doc) {
        const link = {
            name: 'baidu',
            href: 'www.baidu.com',
            nwePage: true
        };
        doc.links = [];
        doc.links.push(link);
        doc.save(function (err) {
            if (err) return console.log(err);
            console.log(doc);
        })
    }
})