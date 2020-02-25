<template>
  <div id="app">
    <!-- <search></search> -->

    <router-view />
  </div>
</template>
<script>
// import Search from './components/Search';
import api from "./api";
export default {
  data() {
    return {
      goodsInfo: {
        goodsImg: [],
        param: {} /** 商品参数 */,
        remarks: {
          detail: [] /** 评论列表 */,
          remarksNumberDetail: [] /** 好评数量 */,
          remarksTags: [] /** 评价标签 */,
          goodsAnalyse /** 好评率 */
        }
      }
    };
  },
  mounted() {
    // 生命周期 请求数据
    api
      .getGoodsInfo()
      .then(data => {
        console.log(data);
        this.goodsInfo = data;
      });
  },
  components: {
    // Search
  }
};
</script>
<style>
/* * {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0 15px;
} */
</style>
