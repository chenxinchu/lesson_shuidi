
<template>
  <div id="app">
    <div>
      <input type="file" @change="handFlieChange" />
      <el-button @click="handleUpload"></el-button>
    </div>
  </div>
</template>

<script>
const Status = {
  // 利于代码可读性
  wait: "wait",
  pause: "pause",
  uploading: "uploading"
};
const SIZE = 0.5 * 1024 * 1024;

export default {
  name: "app",
  data: () => ({
    container: {
      // 将任务放到一起
      file: null,
      hash: "" // 哈希
    },
    status: Status.wait
  }),
  methods: {
    async calculateHash(fileChunkList) {
      return new Promise(resolve => {
        // 封装花时间的任务
        // web workers
        // js 单线程， UI 主线程
        // html5 web workers 单独开一个线程 独立于主线程
        // 回调 不影响原来的UI
        // html5 带来的优化
        this.container.worker = new Worker("/hash.js");
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = e => {
          console.log(e.data);
        };
      });
    },
    handFlieChange(e) {
      // 文件分割
      const [file] = e.target.files; //
      // console.log(e.target.files);
      this.container.file = file;
    },
    async handleUpload(e) {
      if (!this.container.file) return;
      this.status = Status.uploading;
      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      this.container.hash = await this.calculateHash(fileChunkList);
    },
    // es6的特性 你和代码是如何结合的？少传参数
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({
          file: file.slice(cur, cur + size)
        });
        cur += size;
      }
      return fileChunkList;
    }
  },
  components: {}
};
</script>

<style>
</style>