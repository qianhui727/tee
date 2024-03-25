<template>
  <div class="one">
    <!-- 按钮 -->
    <div class="button">
      <button class="button1" @click="goToLink('/view/fine_grained')">
        数据和情感效果可视化
      </button>
      <button class="button2" @click="goToLink('/view/dataing')">
        数据分析可视化
      </button>
      <button class="button3" @click="goToLink('/view/clustering')">
        聚类效果可视化
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // url: require("../../assets/img/可视化主页面.jpg"),
    };
  },
  mounted() { },
  methods: {
    // 点击之后进行跳转
    goToLink(url) {
      // 使用 $router.push 方法跳转到指定链接
      this.$router.push(url); // 请将 '/your-link' 替换为你想要跳转的实际链接
    },
  },
};
</script>

<style scoped>
.one {
  background: no-repeat url("../../assets/img/可视化主页面.jpg");
  background-size: cover;
  background-position: center 0;
  min-height: 93vh;
  padding: 10px;
}



.button {
  display: flex;
  justify-content: space-evenly;
  font-size: 28px;
  margin-top: 135px;
}

.button1 {
  color: white;
  margin: 30px 30px 30px 30px;
  width: 310px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  cursor: pointer;
}

.button2 {
  color: white;
  margin: 30px 30px 30px 30px;
  width: 310px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  cursor: pointer;
}

.button3 {
  color: white;
  margin: 30px 30px 30px 30px;
  width: 310px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  cursor: pointer;
}
</style>
