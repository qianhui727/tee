<template>
  <div class="">
    <div class="main-tea">
      <div class="left">
        <div class="box">
          <div class="tit">
            <h2>好评</h2>
          </div>
          <div class="tea_item_xili">
            <p class="letter_fb">
              <el-button id="xl1" class="next" @click="change1()">茶汤清亮平和</el-button>
              <el-button id="xl2" class="next" @click="change2()">口感温和甘醇</el-button>
              <el-button id="xl3" class="next" @click="change3()">耐泡度不错</el-button>
              <el-button id="xl5" class="next" @click="change4()">品质不错尚好</el-button>
              <el-button id="xl6" class="next" @click="change5()">汤色明亮宜人</el-button>
              <el-button id="xl7" class="next" @click="change6()">茶叶外形好看</el-button>
              <el-button id="xl8" class="next" @click="change7()">香气清新柔和</el-button>
              <el-button id="xl9" class="next" @click="change8()">色香协调性好</el-button>
              <el-button id="xla" class="next" @click="change9()">叶底嫩绿柔软</el-button>
              <el-button id="xlc" class="next" @click="change10()">整体感觉不错</el-button>
              <el-button id="xle" class="next" @click="change11()">原料细嫩成熟</el-button>
              <el-button id="xlf" class="next" @click="change12()">滋味饱满持久</el-button>
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="box">
          <div class="tit">
            <h2>差评</h2>
          </div>
          <div class="tea_item_xili">
            <p class="letter_fb">
              <el-button id="xl1" class="next" @click="change13()">茶汤单薄酸涩</el-button>
              <el-button id="xl2" class="next" @click="change14()">口感苦涩一般</el-button>
              <el-button id="xl3" class="next" @click="change15()">耐泡度不够</el-button>
              <el-button id="xl5" class="next" @click="change16()">茶叶品质不佳</el-button>
              <el-button id="xl6" class="next" @click="change17()">汤色浑浊不美观</el-button>
              <el-button id="xl7" class="next" @click="change18()">外形粗糙不美观</el-button>
              <el-button id="xl8" class="next" @click="change19()">香气沉闷持久性差</el-button>
              <el-button id="xl9" class="next" @click="change20()">色香协调性不好</el-button>
              <el-button id="xla" class="next" @click="change21()">叶底粗老有梗</el-button>
              <el-button id="xlc" class="next" @click="change22()">整体青涩一般</el-button>
              <el-button id="xle" class="next" @click="change23()">原料细碎粗老</el-button>
              <el-button id="xlf" class="next" @click="change24()">滋味寡淡苦涩</el-button>
            </p>
          </div>
        </div>
      </div>
      <div class="detail">
        <br>
        <div>
          <h2 id="commit" style="padding-left:15px">提到原料的评价中有63%觉得原料差，共40条</h2>
        </div>
        <div class="boxf2">
          <div>
            <iframe id="iframeBox" src="../../../../../../../../input/观点之茶汤差.html" frameborder="0" style="width: 100%; height: 640px" allowfullscreen />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// a1.onclick = function() {
//   // iframeBox.setAttribute('src', './')
//   alert('asd')
// }

export default {
  data() {
    return {
      fileData: '',
      analysisResults: '',
      visible: false
    }
  },
  methods: {
    // 细粒度
    change1() {
      var iBox = document.getElementById('iframeBox')
      var commit = document.getElementById('commit')
      iBox.setAttribute('src', '../../../../input/观点之茶汤好.html')
      commit.innerHTML = '提到原料的评价中有62%觉得茶汤好，共36条'
    },
    change2() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之口感好.html')
    },
    change3() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之泡度好.html')
    },
    change4() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之品质好.html')
    },
    change5() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之汤色好.html')
    },
    change6() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之外形好.html')
    },
    change7() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之香气好.html')
    },
    change8() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之协调好.html')
    },
    change9() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之叶底好.html')
    },
    change10() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之整体好.html')
    },
    change11() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之原料好.html')
    },
    change12() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之滋味好.html')
    },

    change13() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之滋味差.html')
    },
    change14() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之口感差.html')
    },
    change15() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之泡度差.html')
    },
    change16() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之品质差.html')
    },
    change17() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之汤色差.html')
    },
    change18() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之外形差.html')
    },
    change19() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之香气差.html')
    },
    change20() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之协调差.html')
    },
    change21() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之叶底差.html')
    },
    change22() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之整体差.html')
    },
    change23() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之原料差.html')
    },
    change24() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../input/观点之滋味差.html')
    }
  }
}
</script>

<style scoped>
    .detail{
      background: url("./b464a43c4b4c5caa24e7f18869d0ccd.jpg");
      background-size: 100%,100%;
      }
    .left {
        display: inline-block;
        width: 50%;
        background-color:#007175;
        border-radius: 5px;
    }

    .right {
        display: inline-block;
        width: 50%;
        background-color:#006d87;
        border-radius: 5px;
    }

    .next {
        margin: 5px;
    }
    .main-tea{
        background-color:rgba(233, 228, 214, 0.24);
    }
    .tit{
        color: white;
    }
    .boxf1{
        /* background-color: aquamarine; */
    }
    .letter_fb{
        color:gray;
        font-size: small;
        position: relative;
        /* left: 50px; */
    }
    .i1:hover{color:darkgoldenrod}

    .boxf2{
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(3px);
      border-radius: 5px;
      font-family: sans-serif;
      text-align: center;
      line-height: 1;
      /*max-width: 50%;*/
      /*max-height: 50%;*/
      color: #fff;
        /* background-color: burlywood; */
        height: 600px;
    }
    a {
        color:#444;
        text-decoration:none;
        font-size:12px;
        letter-spacing: 3px;
        margin: 5px;
    }
    /*a:link,a:visited{color:#999;}*/
    a:hover{
        color:#569091;
        color:#c19450;
        color:#c0501f;
    }
    .box {
      /* 重点设置下面两个属性 */
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 5px;
      font-family: sans-serif;
      text-align: center;
      line-height: 1;
      /*max-width: 50%;*/
      /*max-height: 50%;*/
      padding: 20px 40px;
      color: #fff;
      z-index: 1;
  }
</style>

