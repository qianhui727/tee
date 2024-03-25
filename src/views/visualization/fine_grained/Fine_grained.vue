<template>
  <div class="total">
    <VueSlickCarousel v-bind="settings" class="lunbo">
      <div id="lunbo1" class="lunbo1"></div>
      <div id="lunbo2" class="lunbo2"></div>
      <div id="lunbo3" class="lunbo3"></div>
      <!-- <div id="lunbo4" class="lunbo4"></div> -->
      <iframe
        id="lunbo4"
        class="lunbo4"
        src="../../../../zz.html"
        sframeborder="0"
        allowfullscreen
      ></iframe>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import * as echarts from "echarts";
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
  mounted() {
    this.getLoadEcharts();
  },
  methods: {
    getLoadEcharts() {
      // 初始化实例
      var myChart1 = echarts.init(document.getElementById("lunbo1"));
      var myChart2 = echarts.init(document.getElementById("lunbo2"));
      var myChart3 = echarts.init(document.getElementById("lunbo3"));

      // 指定图表的配置项和数据
      var option1;
      var option2;
      var option3;
      // var option4;

      option1 = {
        title: {
          text: "茶叶喜好占比",
          left: "center",
          top: 20,
          textStyle: {
            color: "rgb(170 ,102 ,100 , 83%)",
          },
        },
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "[国艳]7572" },
              { value: 310, name: "[大益]金柑普" },
              { value: 274, name: "[清神阁]有机千里香" },
              { value: 235, name: "[金花茶业]特级茉莉花茶" },
              { value: 400, name: "[聚韵轩]九曲红梅" },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgb(170 ,102 ,100 , 83%)",
            },
            labelLine: {
              lineStyle: {
                color: "rgb(170 ,102 ,100 , 83%)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };

      option2 = {
        title: {
          text: "评论热度趋势图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [
            "西岩山罐装乌龙茶",
            "传世·红票",
            "蒙顶甘露",
            "炭焙铁观音",
            "一级水金龟",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "西岩山罐装乌龙茶",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "传世·红票",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "蒙顶甘露",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "炭焙铁观音",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "一级水金龟",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      const colors = ["#5470C6", "#EE6666"];
      option3 = {
        title: {
          text: "芽茶-叶茶喜好对比",
        },
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        legend: {},
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "芽茶  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            // prettier-ignore
            data: ['2023-1', '2023-2', '2023-3', '2023-4', '2023-5', '2023-6', '2023-7', '2023-8', '2023-9', '2023-10', '2023-11', '2023-12'],
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "叶茶  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            // prettier-ignore
            data: ['2023-1', '2023-2', '2023-3', '2023-4', '2023-5', '2023-6', '2023-7', '2023-8', '2023-9', '2023-10', '2023-11', '2023-12'],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "叶茶",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            emphasis: {
              focus: "series",
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
          {
            name: "芽茶",
            type: "line",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            data: [
              3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
              0.7,
            ],
          },
        ],
      };

      // 绘制图表
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
    },
  },
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}

.total {
  background-image: url("./数据情感效果可视化.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 93vh;
  background-position: center 0;
  padding: 10px;
  margin: 0 auto;
}

:deep .slick-prev:before {
  position: absolute;
  left: -20px;
  color: rgb(202, 186, 154);
  font-size: 40px;
}

:deep .slick-next:before {
  color: rgb(202, 186, 154);
  font-size: 40px;
}

.lunbo {
  /* background-color: rgba(191, 177, 145, 35%); */
  height: 500px;
  width: 1000px;
  margin: 20px auto;
}

.lunbo1,
.lunbo2,
.lunbo3,
.lunbo4 {
  height: 445px;
  border-style: unset;
}
</style>
