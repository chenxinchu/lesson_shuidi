const getGoodsInfo = () => {
  return new Promise((resolve,resject)=>{
    setTimeout(()=>{
      // 伪造数据
      const data={
        goodsImg:[
          'https://powerdos.github.io/Mall-Vue/static/img/goodsDetail/intro/1.jpg',
          'https://powerdos.github.io/Mall-Vue/static/img/goodsDetail/intro/2.jpg',
          'https://powerdos.github.io/Mall-Vue/static/img/goodsDetail/intro/3.jpg',
          'https://powerdos.github.io/Mall-Vue/static/img/goodsDetail/intro/4.jpg'
        ],
        title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
        tags:['满69-20元','关注产品★送钢化膜','BIT配次日达'],
        discount:['满148减10'],
        promotion:['跨店满减'],
        remarksNum:6000,
        setMeal:[
          
        ]

      }
    },1000);
  })
}

export default{
  getGoodsInfo: getGoodsInfo
}