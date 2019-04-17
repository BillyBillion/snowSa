<template>
  <div class="container">
    <router-view/>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">首页</el-tab-pane>
      <el-tab-pane label="博文" name="second">博文</el-tab-pane>
      <el-tab-pane label="音乐" name="fourth">音乐</el-tab-pane>
      <el-tab-pane label="关于我" name="third">关于我</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="">
    .container {
        width:100%;
        height:100%;
    }
</style>
