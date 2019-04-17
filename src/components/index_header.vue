<template>
  <el-carousel :interval="5000" arrow="always" class="index" indicator-position="none">
    <el-carousel-item v-for="item in imgList" :key="item.text" height="200px">
      <div class="l carousel-box">
        <span>{{ item.text }}</span>
        <img :src="item.url">
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "index_header",
  data() {
    return {
      msg: "bbbbbbbbbbbbbbbbbbb",
      imgList: [
        {
          text: "希望谷，英格兰峰区 (© Daniel_Kay/Getty Images Plus)",
          url:
            "http://s.cn.bing.net/th?id=OHR.HopeValley_ZH-CN2208363231_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
        },
        {
          text: "石楠花丛中的雄狍 (© wonderful-Earth.net/Alamy Stock Photo)",
          url:
            "http://s.cn.bing.net/th?id=OHR.BesenheideBDJ_ZH-CN2139380821_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
        },
        {
          text:
            "高山桉树的树皮，澳大利亚塔斯马尼亚 (© Australian Scenics/Getty Images)",
          url:
            "http://s.cn.bing.net/th?id=OHR.AlpineEucalyptBark_ZH-CN2046783535_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
        }
      ],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l {
  float: left;
}

.index.el-carousel,
.index .el-carousel__container,
.index.el-carousel > div,
.index .el-carousel__item,
.index .el-carousel__item>div {
  height: 5.386667rem /* 202/37.5 */;
}
img {
  width: 100%;
  height: 100%;
}
.carousel-box {
  background: transparent;
  font-weight: normal;
}

.carousel-box span {
  display: block;
  font-size: 16px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  color: #fff;
  height: 0.833333rem /* 20/24 */;
  line-height: 0.833333rem /* 20/24 */;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 96%;
  padding: 0 2%;
}
</style>
