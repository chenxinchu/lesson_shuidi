import CarouselItem from '../carousel//src/item.vue';
// install 概念 
CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem; // 