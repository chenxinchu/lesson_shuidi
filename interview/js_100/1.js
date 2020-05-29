// LHS和RHS
function chageObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object();
  o.siteUrl = "http://www.google.com";
  // console.log(o.siteUrl+'11111')
}


let webSite = new Object();
chageObjProperty(webSite);
console.log(webSite.siteUrl);