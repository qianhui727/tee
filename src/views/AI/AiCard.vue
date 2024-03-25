<template>
  <div class="aiCard">
    <span class="aiName">茶语AI</span>
    <div class="aiContent">
      {{ aiContent }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    aiContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.aiCard {
  background-color: rgb(220, 233, 255);
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;

  .aiName {
    display: inline-block;
    margin-left: 5px;
    font-size: 15px;
    font-weight: 1000px;
  }

  .aiContent {
    background-color: #fff;
    padding: 0 8px;
    border-radius: 5px;
    margin-top: 5px;
  }
}
</style>
