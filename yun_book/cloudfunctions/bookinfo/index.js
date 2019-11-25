var cloud = require('wx-server-sdk');//云服务器
var rp = require('request-promise');//npm 向api发出请求
cloud.init();

exports.main = async(event,context) => {
  console.log((`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=924ac9d703c9d097d6976d63b2e2254d`));
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=924ac9d703c9d097d6976d63b2e2254d`).then(html =>{
    return html;
  })
  return res;
}
