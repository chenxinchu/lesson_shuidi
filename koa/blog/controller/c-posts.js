exports.getPosts = async ctx =>{
    // 中间件处理函数
    // ctx.body = 'hello,posts';
    await ctx.render('posts',{

    })
}

exports.getRedirectPosts = async ctx =>{
    await ctx.redirect('/posts');
}