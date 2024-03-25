<template>
  <div>
    <div ref="chart" style="width: 250px; height: 400px;" />
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  mounted() {
    const chart = echarts.init(this.$refs.chart, 'wonderland', { renderer: 'canvas' })
    const option = {
      animation: true,
      animationThreshold: 2000,
      animationDuration: 1000,
      animationEasing: 'cubicOut',
      animationDelay: 0,
      animationDurationUpdate: 300,
      animationEasingUpdate: 'cubicOut',
      animationDelayUpdate: 0,
      series: [
        {
          type: 'bar',
          legendHoverLink: true,
          data: [
            906,
            836,
            778,
            634,
            329,
            284,
            210,
            170,
            141,
            26
          ],
          showBackground: false,
          barMinHeight: 0,
          barCategoryGap: '20%',
          barGap: '30%',
          large: false,
          largeThreshold: 400,
          seriesLayoutBy: 'column',
          datasetIndex: 0,
          clip: true,
          zlevel: 0,
          z: 2,
          label: {
            show: true,
            position: 'top',
            margin: 8
          }
        }
      ],
      legend: [
        {
          data: [
            ''
          ],
          selected: {
            '': true
          },
          show: true,
          padding: 5,
          itemGap: 10,
          itemWidth: 25,
          itemHeight: 14
        }
      ],
      tooltip: {
        show: true,
        trigger: 'item',
        triggerOn: 'mousemove|click',
        axisPointer: {
          type: 'line'
        },
        showContent: true,
        alwaysShowContent: false,
        showDelay: 0,
        hideDelay: 100,
        textStyle: {
          fontSize: 14
        },
        borderWidth: 0,
        padding: 5
      },
      xAxis: [
        {
          show: true,
          scale: false,
          nameLocation: 'end',
          nameGap: 15,
          gridIndex: 0,
          inverse: false,
          offset: 0,
          splitNumber: 5,
          minInterval: 0,
          splitLine: {
            show: false,
            lineStyle: {
              show: true,
              width: 1,
              opacity: 1,
              curveness: 0,
              type: 'solid'
            }
          },
          data: [
            '普洱',
            '绿茶',
            '红茶',
            '乌龙',
            '黑茶',
            '白茶',
            '花茶',
            '黄茶',
            '袋泡',
            '速溶茶'
          ]
        }
      ],
      yAxis: [
        {
          show: true,
          scale: false,
          nameLocation: 'end',
          nameGap: 15,
          gridIndex: 0,
          inverse: false,
          offset: 0,
          splitNumber: 5,
          minInterval: 0,
          splitLine: {
            show: false,
            lineStyle: {
              show: true,
              width: 1,
              opacity: 1,
              curveness: 0,
              type: 'solid'
            }
          }
        }
      ],
      title: [
        {
          text: '茶类分布',
          padding: 5,
          itemGap: 10
        }
      ]
    }
    chart.setOption(option)
  }
}
</script>

