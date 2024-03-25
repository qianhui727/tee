<template>
  <div class="total">
    <VueSlickCarousel v-bind="settings" class="lunbo">
      <div id="lunbo1" class="lunbo1"></div>
      <div id="lunbo2" class="lunbo2"></div>
      <iframe id="lunbo3" class="lunbo3" src="../../../../品牌词云.html" sframeborder="0" allowfullscreen></iframe>
      <iframe id="lunbo4" class="lunbo4" src="../../../../热搜前20.html" sframeborder="0" allowfullscreen></iframe>
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
    this.$nextTick(() => {
      this.getLoadEcharts();
    });
  },
  methods: {
    getLoadEcharts() {
      // 初始化实例
      var myChart1 = echarts.init(document.getElementById("lunbo1"));
      var myChart2 = echarts.init(document.getElementById("lunbo2"));

      // 指定图表的配置项和数据
      var option1;
      var option2;

      const names = [
        "白牡丹",
        "特级蒙顶黄芽",
        "杉林溪乌龙",
        "一级恩施玉露",
        "茉莉银针",
        "特级龙井",
        "麻黑寨",
        "纯昔归",
        "传祁1915",
      ];
      const years = ["2018", "2019", "2020", "2021", "2022", "2023"];
      const shuffle = (array) => {
        let currentIndex = array.length;
        let randomIndex = 0;
        while (currentIndex > 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
        return array;
      };
      const generateRankingData = () => {
        const map = new Map();
        const defaultRanking = Array.from(
          { length: names.length },
          (_, i) => i + 1
        );
        for (const _ of years) {
          const shuffleArray = shuffle(defaultRanking);
          names.forEach((name, i) => {
            map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
          });
        }
        return map;
      };
      const generateSeriesList = () => {
        const seriesList = [];
        const rankingMap = generateRankingData();
        rankingMap.forEach((data, name) => {
          const series = {
            name,
            symbolSize: 20,
            type: "line",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            endLabel: {
              show: true,
              formatter: "{a}",
              distance: 20,
            },
            lineStyle: {
              width: 4,
            },
            data,
          };
          seriesList.push(series);
        });
        return seriesList;
      };
      option1 = {
        title: {
          text: "市场热度分析",
        },
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: 30,
          right: 110,
          bottom: 30,
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: true,
          },
          axisLabel: {
            margin: 30,
            fontSize: 16,
          },
          boundaryGap: false,
          data: years,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            margin: 30,
            fontSize: 16,
            formatter: "#{value}",
          },
          inverse: true,
          interval: 1,
          min: 1,
          max: names.length,
        },
        series: generateSeriesList(),
      };
      let xAxisData = [];
      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      let teaName = [
        "睿心",
        "茯缘",
        "水仙",
        "黄金饼",
        "金骏眉",
        "红上斗",
        "女儿环",
        "一品心",
      ];
      for (let i = 0; i < 8; i++) {
        xAxisData.push(teaName[i]);
        data1.push(+(Math.random() * 2).toFixed(2));
        data2.push(+(Math.random() * 5).toFixed(2));
        data3.push(+(Math.random() + 0.3).toFixed(2));
        data4.push(+Math.random().toFixed(2));
      }

      var emphasisStyle = {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0,0,0,0.3)",
        },
      };
      option2 = {
        title: {
          text: "茶类好评分布",
        },
        legend: {
          data: ["香气", "协调", "原料", "叶底"],
          left: "20%",
        },

        toolbox: {
          feature: {
            magicType: {
              type: ["stack"],
            },
            dataView: {},
            saveAsImage: {},
          },
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          name: "茶类",
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
        },
        yAxis: {},
        grid: {
          bottom: 100,
        },
        series: [
          {
            name: "香气",
            type: "bar",
            stack: "one",
            emphasis: emphasisStyle,
            data: data1,
          },
          {
            name: "协调",
            type: "bar",
            stack: "one",
            emphasis: emphasisStyle,
            data: data2,
          },
          {
            name: "原料",
            type: "bar",
            stack: "two",
            emphasis: emphasisStyle,
            data: data3,
          },
          {
            name: "叶底",
            type: "bar",
            stack: "two",
            emphasis: emphasisStyle,
            data: data4,
          },
        ],
      };
      myChart2.on("brushSelected", function (params) {
        var brushed = [];
        var brushComponent = params.batch[0];
        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
          var rawIndices = brushComponent.selected[sIdx].dataIndex;
          brushed.push("[Series " + sIdx + "] " + rawIndices.join(", "));
        }
        myChart2.setOption({
          title: {
            backgroundColor: "#333",
            text: "SELECTED DATA INDICES: \n" + brushed.join("\n"),
            bottom: 0,
            right: "10%",
            width: 100,
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
          },
        });
      });
      // 绘制图表
      myChart1.setOption(option1);
      myChart2.setOption(option2);
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
  background-image: url("./数据分析可视化.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 93vh;
  background-position: center 0;
  padding: 10px;
  margin: 0 auto;
}

.lunbo {
  height: 500px;
  width: 1000px;
  margin: 20px auto;
}

::v-deep .slick-prev:before {
  position: absolute;
  left: -20px;
  color: rgb(202, 186, 154);
  font-size: 40px;
}

::v-deep .slick-next:before {
  color: rgb(202, 186, 154);
  font-size: 40px;
}

.lunbo1,
.lunbo2,
.lunbo3,
.lunbo4 {
  float: left;
  height: 500px;
  border-style: unset;
}
</style>
