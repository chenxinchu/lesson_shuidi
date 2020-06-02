import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588841843406_1416';

  // add your egg config in here
  config.middleware = ['graphql'];
  config.graphql = {
    router: '/graphql',
    app: true,
    agent: true,
    graphiql: true,
    apolloServerOptions: {
      tracing: true,
      debug: true,
    }
  }

  config.security={
    csrf:{
      ignore: () => true
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  config.github = {
    login_url: 'https://github.com/login/oauth/authorize',
    client_id: 'd831ec48a1b71d166d00',
    client_secret: '30ccb7db6e79104bd55e1e48b1c7ac5ce85bbb90',
    scope: ['user']
  }

  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
