<template>
  <div class="">
    <div>

      <!-- <el-row style="text-align: center; padding-top:20px;padding-bottom:20px;height: 880px;background-color:cadetblue;">
      <el-button type="primary" class="top" round @click="$router.push('/view/fine_grained')">细粒度情感主题可视化</el-button>
      <el-button type="success" class="left" round @click="$router.push('/view/dataing')">数据分析可视化</el-button>
      <el-button type="success" class="right" round @click="$router.push('/view/clustering')">聚类效果可视化</el-button>
    </el-row>
  </div> -->
      <div class="main-tea">
        <div class="boxf1">
          <div class="tit">
            <h2>茶评</h2>
          </div>
          <div class="tea_item_xili">
            <h4 style="color:chocolate">细粒度推荐</h4>
            <p class="letter_fb">
              <el-button id="xl1" style="background-color:#95c194" @click="change1()">茶汤好</el-button>
              <el-button id="xl2" style="background-color:#95c194" @click="change2()">工艺精致</el-button>
              <el-button id="xl3" style="background-color:#95c194" @click="change3()">均匀不错</el-button>
              <el-button id="xl4" style="background-color:#95c194" @click="change4()">口感好</el-button>
              <el-button id="xl5" style="background-color:#95c194" @click="change5()">耐泡度好</el-button>
              <el-button id="xl6" style="background-color:#95c194" @click="change6()">嫩度好</el-button>
              <el-button id="xl7" style="background-color:#95c194" @click="change7()">色泽好</el-button>
              <el-button id="xl8" style="background-color:#95c194" @click="change8()">汤色好</el-button>
              <el-button id="xl9" style="background-color:#95c194" @click="change9()">甜度好</el-button>
              <el-button id="xla" style="background-color:#95c194" @click="change10()">外形好</el-button>
              <el-button id="xlb" style="background-color:#95c194" @click="change11()">香气持久</el-button>
              <el-button id="xlc" style="background-color:#95c194" @click="change12()">香气好</el-button><br><br>
              <el-button id="xld" style="background-color:#95c194" @click="change13()">选料好</el-button>
              <el-button id="xle" style="background-color:#95c194" @click="change14()">原料好</el-button>
              <el-button id="xlf" style="background-color:#95c194" @click="change15()">总体好</el-button>
            </p>
          </div>
          <hr class="line">
          <div class="tea_item_brand">
            <h4 style="color:slateblue">茶类推荐：</h4>
            <div class="fr">
              <div class="all">
                <p class="letter_fb">
                  <a style="color:grey">全部 </a>
                  <a id="q1" @click="cl1()">绿茶 </a>
                  <a id="q2" @click="cl2()">乌龙 </a>
                  <a id="q3" @click="cl3()">红茶 </a>
                  <!-- <a id="q4" @click="cl4()">生普 </a> -->
                  <a id="q5" @click="cl5()">普洱 </a>
                  <a id="q6" @click="cl6()">黑茶 </a>
                  <a id="q7" @click="cl7()">速溶 </a>
                  <a id="q8" @click="cl8()">黄茶 </a>
                  <a id="q9" @click="cl9()">花茶 </a>
                  <a id="q10" @click="cl10()">袋泡</a>
                </p>
                <hr class="line">
              </div>
            </div>
          </div>
          <div class="tea_item_chanqu">
            <h4 style="color:cornflowerblue">产地推荐</h4>
            <div class="fr">
              <p class="letter_fb">
                <span><a class="current">全部</a></span>

                <span><a @click="area1()">福建 </a></span>

                <span><a @click="area2()">云南 </a></span>

                <span><a @click="area3()">四川 </a></span>

                <span><a @click="area4()">台湾</a></span>

                <span><a @click="area5()">湖北</a></span>

                <span><a @click="area6()">浙江</a></span>

                <span><a @click="area7()">安徽</a></span>

                <span><a @click="area8()">广东</a></span>

                <span><a @click="area9()">贵州</a></span>

                <span><a @click="area10()">广西</a></span>

                <span><a @click="area11()">江西</a></span>

                <span><a @click="area12()">陕西</a></span>

                <span><a @click="area13()">北京</a></span>

                <span><a @click="area14()">国外</a></span><br><br>

                <span><a @click="area15()">河南</a></span>

                <span><a @click="area16()">山东</a></span>

                <span><a @click="area17()">海南</a></span>

                <span><a @click="area18()">山西</a></span>

                <span><a @click="area19()">西藏</a></span>

                <span><a @click="area20()">湖南</a></span>

                <span><a @click="area21()">重庆</a></span>

                <span><a @click="area22()">江苏</a></span>

                <span><a @click="area23()">上海</a></span>

                <span><a @click="area24()">天津</a></span>

                <span><a @click="area25()">宁夏</a></span>

                <span><a @click="area26()">辽宁</a></span>

                <span><a @click="area27()">吉林</a></span>

                <span><a @click="area28()">香港</a></span><br><br>

                <span><a @click="area29()">黑龙江</a></span>

                <span><a @click="area30()">甘肃</a></span>

                <span class="color999">( 按热门度排序 )</span>
              </p>
              <hr class="line">
            </div>
          </div>
          <div class="tea_item_grade">
            <h4 style="color:crimson">评分推荐</h4>
            <div class="fr">
              <p class="letter_fb">
                <span><a class="current" @click="pf1()">全部</a></span>

                <span><a @click="pf1()">&lt;6.0</a></span>

                <span><a @click="pf2()">6.0~7.0</a></span>

                <span><a @click="pf3()">7.0~8.0</a></span>

                <span><a @click="pf4()">8.0~9.0</a></span>

                <span><a @click="pf5()">9.0~10.0</a></span>
              </p>
            </div>
            <hr class="line">
          </div>
        </div>
        <div class="box">
          <div>
            <iframe id="iframeBox" src="../../../../细粒度属性推荐/原料好.html" frameborder="0" style="width: 100%; height: 296px" allowfullscreen />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
      iBox.setAttribute('src', '../../../../细粒度属性推荐/茶汤好.html')
    },
    change2() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/工艺精制.html')
    },
    change3() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/均匀不错.html')
    },
    change4() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/口感好.html')
    },
    change5() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/耐泡度好.html')
    },
    change6() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/嫩度好.html')
    },
    change7() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/色泽好.html')
    },
    change8() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/汤色好.html')
    },
    change9() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/甜度好.html')
    },
    change10() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/外形好.html')
    },
    change11() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/色香持久.html')
    },
    change12() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/香气好.html')
    },
    change13() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/工艺精制.html')
    },
    change14() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/原料好.html')
    },
    change15() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../细粒度属性推荐/总体好.html')
    },
    // 茶类推荐
    cl1() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/绿茶.html')
    },
    cl2() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/乌龙.html')
    },
    cl3() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/红茶推荐.html')
    },
    cl5() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/普洱.html')
    },
    cl6() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/黑茶.html')
    },
    cl7() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/速溶.html')
    },
    cl8() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/黄茶.html')
    },
    cl9() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/花茶.html')
    },
    cl10() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../茶类推荐/袋泡.html')
    },
    // 评分
    pf1() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../按评分推荐/评分小于6分.html')
    },
    pf2() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../按评分推荐/评分6分-7分.html')
    },
    pf3() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../按评分推荐/评分7分-8分.html')
    },
    pf4() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../按评分推荐/评分8分-9分.html')
    },
    pf5() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../按评分推荐/评分9分-10分.html')
    },

    // 地区
    area1() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/福建茶叶.html')
    },
    area2() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/云南茶叶.html')
    },
    area3() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/四川.html')
    },
    area4() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/台湾.html')
    },
    area5() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/湖北.html')
    },
    area6() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/浙江.html')
    },
    area7() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/安徽.html')
    },
    area8() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/广东.html')
    },
    area9() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/贵州.html')
    },
    area10() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/广西.html')
    },
    area11() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/江西.html')
    },
    area12() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/陕西.html')
    },
    area13() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/北京.html')
    },
    area14() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/国外.html')
    },
    area15() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/河南.html')
    },
    area16() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/山东.html')
    },
    area17() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/海南.html')
    },
    area18() {
      var iBox = document.getElementById('iframeBox')
      alert('没有福建记录，为您提供福建内容')
      iBox.setAttribute('src', '../../../../产地推荐/福建茶叶.html')
    },
    area19() {
      var iBox = document.getElementById('iframeBox')
      alert('没有西藏记录，为您提供福建内容')
      iBox.setAttribute('src', '../../../../产地推荐/福建.html')
    },
    area20() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/湖南.html')
    },
    area21() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/重庆.html')
    },
    area22() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/江苏.html')
    },
    area23() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/上海.html')
    },
    area24() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/天津.html')
    },
    area25() {
      alert('没有宁夏记录，为您提供福建内容')
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/福建.html')
    },
    area26() {
      alert('没有辽宁记录，为您提供福建内容')
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/福建.html')
    },
    area27() {
      alert('没有吉林记录，为您提供福建内容')
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/福建.html')
    },
    area28() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/香港.html')
    },
    area29() {
      alert('没有黑龙江记录，为您提供福建内容')
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/福建.html')
    },
    area30() {
      var iBox = document.getElementById('iframeBox')
      iBox.setAttribute('src', '../../../../产地推荐/甘肃.html')
    }
  }
}
</script>

<style scoped>
.bc{
  background: url("./977598c5ac40e3aff9df67b53e51242.jpg");
  background-size: 100%,100%;

}
.main-tea{
  background-color:#E2E1E4;
  padding-left: 30px;
  padding-top: 10px;
}
.line{
}
.tit{
  /* color: green; */
  /* background-color: #d48121; */
}

.letter_fb{
  color:gray;
  font-size: small;
  position: relative;
  left: 50px;
}

.button_1 {
width: 730px;
/* margin: 0 auto; */
}
/* .i1:hover{color:darkgoldenrod} */

.boxf2{
  /* background-color: burlywood; */
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
}
.black {
font-weight: bold;
margin: 5px;
}
</style>

