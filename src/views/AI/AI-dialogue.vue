<template>
  <div class="total">
    <AiCard  aiContent='欢迎' />
    <!-- 交叉输出卡片 -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <UserCard :userContent="item" />
        <AiCard v-if="index < aiReturn.length" :aiContent="aiReturn[index]" />
      </li>
    </ul>
    <div class="box" ref="messagesEndRef"></div>

    <!-- 输入框 -->
    <div class="foot">
      <el-input
        class="input"
        placeholder="请输入您的问题"
        v-model="input"
      ></el-input>
      <el-button class="button" @click="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script>
import AiCard from "./AiCard.vue";
import UserCard from "./UserCard.vue";

export default {
  components: {
    AiCard,
    UserCard,
  },
  data() {
    return {
      // 用户输入内容
      items: [],
      // AI返回内容
      aiReturn: [],
      input: "", // 输入框内容
    };
  },
  methods: {
    // 点击发送按钮时触发的方法
    sendMessage() {
      // 将输入框内容记录到用户输入内容数组中
      if (this.input.trim() !== "") {
        this.items.push(this.input);
        this.aiReturn.push(this.input);
      }

      // 清空输入框内容
      this.input = "";
      // 在这里可以处理发送消息的逻辑，比如将内容发送到后端或者进行其他处理
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none; /* 去掉列表项前面的黑点 */
}
.total {
  overflow: scroll;
  overflow-x: hidden;
  height: 85vh;
  width: 100%;

  .foot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    .input {
      width: 70%;
      background-color: yellow;
    }
    .button {
      width: 30%;
      height: 80px;
    }
  }
}
::v-deep .el-input__inner {
  height: 80px;
}
</style>
