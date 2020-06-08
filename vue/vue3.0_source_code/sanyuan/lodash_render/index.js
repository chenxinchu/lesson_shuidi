const _ = require('lodash');

const compiler = _.template('<h1><%= title %></h1>')
const html = compiler({ title: 'My Component' })

setTimeout(() => {
  console.log(compiler({title: 'New Component'}));
}, 3000)

// document.getElementById('app').innerHTML = html