<template>
  <div class="total">
    <VueSlickCarousel v-bind="settings" class="lunbo">
      <iframe id="lunbo1" class="lunbo1" src="../../../../clustering_png/tea总评关键词聚类后种类0.html" sframeborder="0"
        allowfullscreen></iframe>
      <iframe id="lunbo2" class="lunbo2" src="../../../../clustering_png/tea总评关键词聚类后种类1.html" sframeborder="0"
        allowfullscreen></iframe>
      <iframe id="lunbo3" class="lunbo3" src="../../../../clustering_png/tea总评关键词聚类后种类2.html" sframeborder="0"
        allowfullscreen></iframe>
      <img src="../../../../public/clustering_two/kmeans聚类1.png" alt="">
      <img src="../../../../public/clustering_two/kmeans聚类2.png" alt="">
      <img src="../../../../public/clustering_two/kmeans聚类3.png" alt="">
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
    };
  },
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}

.total {
  background-image: url("./聚类效果可视化.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 93vh;
  background-position: center 0;
  padding: 10px;
  margin: 0 auto;
}

.lunbo {
  background-color: rgba(135, 84, 88, 39%);
  height: 450px;
  width: 900px;
  margin: 20px auto;
  padding: 3px;
}

::v-deep .slick-prev:before {
  position: absolute;
  left: -20px;
  color: rgb(185, 165, 168);
  font-size: 40px;
}

::v-deep .slick-next:before {
  color: rgb(185, 165, 168);
  font-size: 40px;
}

.lunbo1,
.lunbo2,
.lunbo3,
.lunbo4,
.lunbo5,
.lunbo6 {
  float: left;
  height: 450px;
  border-style: unset;
}

img {
  height: 450px;
}
</style>
