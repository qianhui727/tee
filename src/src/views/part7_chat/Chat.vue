<template>
  <div>
    <div class="video-container">
      <video id="my-video" controls autoplay loop>
        <source src="./gpt4.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="caption">
      <h1>茶语智选之茶话悠悠（Tea Bot）</h1>
      <!-- <a href="http://127.0.0.1:8001/">进入茶话悠悠</a> -->

      <!-- 新增AI对话功能 -->
      <router-link to="/AI">进入茶话悠悠</router-link>

      <span style="border-bottom: 1px solid #fff;">茶语知识·智能问答系统</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onKeyDown() {
      this.send_message();
    },
    send_message() {
      console.log(this.input);
    },
  },
};
</script>

<style scoped>
a {
  border: 1px solid #fff;
  padding: 5px 10px;
  margin-right: 40px;
  text-decoration: none;
}

.video-container {
  width: 100%;
  height: 94.7vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#my-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#my-video::-webkit-media-controls {
  display: none;
}

#my-video::-webkit-media-controls-enclosure {
  overflow: hidden;
}

.caption {
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 700px;
  text-align: center;
  color: white;
}
</style>
