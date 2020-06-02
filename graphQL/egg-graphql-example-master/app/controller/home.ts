import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // 基于github 登录 
    const { config } = this.app; 
    const data = {
      client_id: config.github.client_id,
      scope: config.github.scope
    }

    await ctx.render('login.html',data)
    console.log(data);

    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
