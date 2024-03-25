<template>
  <div class="userCard">
    <span class="userHeadPhoto">提问：</span>
    <div class="userContent">{{ userContent }}</div>
  </div>
</template>

<script>
export default {
  props: {
    userContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.userCard {
  background-color: #fff;
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;

  .userHeadPhoto {
    text-align: center;
    display: inline-block;
    height: 25px;
    width: 50px;
  }

  .userName {
    display: inline-block;
    margin-left: 5px;
    height: 50px;
    width: 50px;
  }

  .userContent {
    background-color: #c7fcdf;
    padding: 0 8px;
    border-radius: 5px;
    margin-top: 5px;
  }
}
</style>
