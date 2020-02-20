<template>
  <div>
    View
  </div>
</template>

<script>
export default {
  created(){ // 生命周期函数
    let province = this.$route.path;
    console.log(province);
    
  }
}
</script>

<style>

</style>