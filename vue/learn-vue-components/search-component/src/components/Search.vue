<template>
  <div>
    <div class="container">
      <i-input v-model="searchData" placeholder="输入你想找的商品" class="search" size="large">
        <Button slot="append" icon="ios-search" @click="search" />
      </i-input>

      <Tag v-for="(item,index) in promotionTags" :key="index" closable @on-close="closeTags(index)">
        <span @click="selectTags(index)">{{item}}</span>
      </Tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotionTags: [
        "买2免1",
        "领200神券",
        "199减100",
        "母婴5折抢",
        "充一百送20"
      ],
      searchData: ""
    };
  },
  methods: {
    search() {
      // console.log(this.searchData);
      // 跳转链接
      this.$router.push({
        path: "/search",
        query: {
          searchData: this.searchData
        }
      });
    },
    selectTags(index) {
      this.searchData = this.promotionTags[index];
    },
    closeTags(index) {
      this.promotionTags.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0 auto;
  margin-bottom: 1px;
  width: 460px;
}
.search {
  margin: 5px 0px;
}
</style>