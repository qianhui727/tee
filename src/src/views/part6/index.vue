<template>
  <div style="padding:10px">
    <div id="header" class="beijing" style="z-index:-888; height:1000px;"></div>
    <div class="vidoo">
      <video id="vid" src="./viod/13328543102088664.mp4" controls="controls" style="width:100%;" loop="loop" autoplay="autoplay">1</video>
    </div>
    <!-- <button id="bf" class="niceButton4" @click="play()">| ></button> -->

    <label for="toggle2" class="toggle2">
      <input id="toggle2" type="checkbox" class="toggle2-input">
      <span class="toggle2-button" @click="play()">| ></span>
    </label>

    <!-- <button id="zt" class="butt" style="top:660px" @click="play()">暂停</button> -->
    <div class="main">
      <h1 style="color:black">合作企业介绍</h1>
      <div class="content1">
        <div class="box1">
          <span style="position:relative; left:6%; top:4px; color:cadetblue; font-weight: bold;">品牌简介</span>
          <hr style="width:90%">
          <div class="MsoNormal">&emsp; &emsp;
            <p style="color:darkslategrey;line-height:30px">
              陕西大秦岭农林开发有限公司成立于2009年，
              公司充分借助太白县独有的生态环境和绿色资源优势，
              集农林特产品种植、研发、销售、推广为一体，注册商标“7.7°”，
              立足太白县优质的野生核桃资源自主研发山核桃手工艺品，
              一件件美轮美奂的核桃艺术品开创了太白县山核桃精深加工的新局面，
              打响了太白县山核桃艺术品靓丽的特色名片，公司多次代表太白县参加省内外各大展销会，
              产品深受国务院副总理汪洋的赞誉及省市县各级领导的一致好评，
              远销全国各地乃至少数民族地区。2016年公司依托对健康产品的深刻理解和多年的实践探索，
              成立了太白县蒲公英专业合作社，建立了“公司+合作社+农户”的经营模式，引进印度大叶茶用蒲公英，标
              准化种植茶用蒲公英500亩，带动当地36户156名贫困户科学管理、适时采收、开展技术培训和田间指导，
              研发“7.7°高山蒲公英茶”，线上线下合力打造“7.7°”品牌，
              坚持品质共享、市场共赢的理念，使公司得到了快速发展，取得一定的经济和社会效益，
              有力的带动了当地农户增收，是该地区将特色农业、旅游、种植业、商业、科技创新农产品加工完美结合的典范。
            </p>
          </div>
        </div>
      </div>
      <div class="content2">
        <div>
          <span style="position:relative; left:6%; top:4px; color:cadetblue; font-weight: bold;">金典茶品</span>
          <hr style="width:90%">
          <!-- <div style="width:80%; position:relative;left:15%">
            <iframe id="iframeBox" src="../../../../test/lumbo.html" frameborder="0" style="width: 100%; height: 520px; border-radius:10px;" allowfullscreen />
          </div> -->
          <div style="position:relative; left:20%;">
            <div class="block text-center">
              <el-carousel height="450px" style="width:60%; border-radius:10px;">
                <el-carousel-item v-for="item2 in arrayimgg2" :key="item2">
                  <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
                  <img class="small justify-center" :src="item2" style="width: 100%; height: 450px;">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div style="text-align:center; font-weight: bold; color:cadetblue"><p>7.7° 蒲公英养生茶</p></div>
        </div>
      </div>
      <div class="content3">
        <span style="position:relative; left:6%; top:4px; color:cadetblue; font-weight: bold;">店面展示</span>
        <hr style="width:90%">
        <div style="position:relative; left:20%;">
          <div class="block text-center">
            <el-carousel height="450px" style="width:60%; border-radius:10px;">
              <el-carousel-item v-for="item in arrayimgg" :key="item">
                <!-- <h3 class="small justify-center" text="2xl">{{ item.url }}</h3> -->
                <img :src="item" style="width: 100%; height: 450px;">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="main2" style="padding:10px">
      <div class="box1">
        <div class="imgg" style="float:left; width:50%">
          <img src="./img/logo1.jpg" style="width:100%;">
          <img src="./img/logo2.jpg" style="width:100%;">
        </div>
        <div style="float:left">
          <p class="words" style="color:whitesmoke">7.7° 蒲公英养生茶</p>
          <p class="words">微博: 未知</p>
          <p class="words">微信: 15353011688</p>
        </div>
        <div style="padding:10px; float:left">
          <p style="font-weight: bold; color:darkslategrey">联系电话: &nbsp;<span style="color:darkslategray; font-size: 15px;">15353011688</span></p>
          <p style="font-weight: bold; color:darkslategrey">座机电话: &nbsp;<span style="color:darkslategray; font-size: 15px;">09174951168</span></p>
          <p style="font-weight: bold; color:darkslategrey">联系邮箱: &nbsp;<span style="color:darkslategray; font-size: 15px;">DQL398@163.com</span></p>
          <p style="font-weight: bold; color:darkslategrey">地址: &nbsp;<span style="color:darkslategray; font-size: 15px;">陕西省宝鸡市太白县太白路7号</span></p>
        </div>
        <div><img></div>
      </div>
    </div>
    <div class="main3">
      <div class="box">
        <div>
          <img style="width:80%;   position:relative; left:2%" src="./img/farm1.jpg">
        </div>
        <h2 style="position:relative; right:9%">劳作</h2>
      </div>

      <div class="box">
        <div>
          <img style="width:80%;   position:relative; left:2%" src="./img/farm2.jpg">
        </div>
        <h2 style="position:relative; right:9%">出耕</h2>
      </div>
      <div class="box">
        <div>
          <img style="width:76%;   position:relative; left:2%" src="./img/yjy.png">
        </div>
        <h2 style="position:relative; right:9%">晨茶</h2>
      </div>
      <!-- <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div>
      <div class="box"><h2>Content</h2></div> -->
      <!-- <script src="./test/sc.js">x</script> -->
    </div>
  </div>

</template>

<script>
// import checkBoxes from './test/sc'
// import $ from './test/sc'
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      arrayimgg: [
        // { url: '../img/shop1.jpg', active: true ,id:1},
        // { url: '../img/shop2.jpg', active: false,id:2},
        // { url: '../img/shop3.jpg', active: false,id:3},
        // { url: '../img/shop4.jpg', active: false,id:4},
        // { url: '../img/shop5.jpg', active: false,id:5},
        // { url: '../img/shop6.jpg', active: false,id:6}
        require('./img/shop1.jpg'),
        require('./img/shop2.jpg'),
        require('./img/shop3.jpg'),
        require('./img/shop4.jpg'),
        require('./img/shop5.jpg'),
        require('./img/shop6.jpg')
      ],
      arrayimgg2: [
        // { url: '../img/product1.jpg', active: true ,id:1},
        // { url: '../img/product2.jpg', active: false ,id:2},
        // { url: '../img/product3.jpg', active: false ,id:3},
        // { url: '../img/product4.jpg', active: false ,id:4}
        require('./img/product1.jpg'),
        require('./img/product2.jpg'),
        require('./img/product3.jpg'),
        require('./img/product4.jpg')
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkBoxes)
    window.addEventListener('scroll', this.divtouming)
  },
  methods: {
    play() {
      var vid = document.getElementById('vid')
      if (vid.paused) {
        vid.play()
      } else {
        vid.pause()
      }
    },
    checkBoxes() {
      const boxes = document.querySelectorAll('.box')
      const triggerBottom = window.innerHeight / 5 * 4
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
          box.classList.add('show')
        } else {
          box.classList.remove('show')
        }
      })
    },
    divtouming() {
      var header = document.getElementById('header')
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      var opacity = (scrollHeight - scrollTop) / scrollHeight
      header.style.backgroundColor = 'rgba(255, 255, 255, ' + (2.5 - opacity * 2.5) + ')'
      // console.log(opacity)
    }
  }
}
</script>

<style scoped>
.beijing{
  width: 100%;
  height:100%;
  top: 10px;
  position:fixed;
  background-color: rgba(0, 0, 0, 0);
}
.box1 {
  /* 重点设置下面两个属性 */
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 5px;
  font-family: sans-serif;
  /*text-align: center;*/
  line-height: 1;
  /*max-width: 50%;*/
  /*max-height: 50%;*/
  padding: 10px 10px;
  color: #fff;
}
.container1 {
  align-items: center;
  display: flex;
  /*justify-content: center;*/
  height: 100%;
  width: 100%;
  /*position: relative;*/
  /*left: 200px;*/
}
.toggle2{
  font-size: 0.8rem;
  display: inline-block;
  vertical-align: top;
  margin: 0 15px 0 0;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  position:fixed;
  top: 95%;
  left: 50%;
  z-index: 100;
}

.toggle2-input{
  display: none;
}

.toggle2-button{
  position: relative;
  display: inline-block;
  line-height: 20px;
  text-transform: uppercase;
  background: white;
  color: #aaa;
  border: 1px solid #ccc;
  padding: 5px 10px 5px 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 12px;
}

.toggle2-button::before{
  position: absolute;
  top: 10px;
  left: 10px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ccc;
  content: "";
  transition: all 0.3s ease;
  border-radius: 50%;
}

.toggle2-input:checked + .toggle2-button{
  background: #00b3b4;
  border-color: #00b3b4;
  color: white;
}

.toggle2-input:checked + .toggle2-button::before{
  background: white;
}

.box {
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transform: translateX(400%);
  transition: transform 0.4s ease;
}

.box:nth-of-type(even) {
  transform: translateX(-400%);
}

.box.show {
  transform: translateX(0);
}

.box h2 {
  font-size: 45px;
}
    .vidoo{
      align-items:center ;
      position:fixed;
      top: 10px;
      z-index: -1000;
    }
    .main{
      /* 重点设置下面两个属性 */
  background-color: rgba(73, 219, 232, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 5px;
  font-family: sans-serif;
  /*text-align: center;*/
  line-height: 1;
  /*max-width: 50%;*/
  /*max-height: 50%;*/
  padding: 10px 10px;
  color: #fff;

        padding: 10px;
        width: 62%;
        height: 100%;
        position:relative;
        top:670px;
        left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        float:left;
        border-radius:10px;
    }
    .main2{
      align-items: center;
      display: flex;
      /*justify-content: center;*/
        width: 25%;
        height: 500px;
        position:absolute;
        top:680px;
        left: 71%;
        float:left;
        border-radius:10px;
    }
    .main3{
      position: relative;
      top:1150px;
      z-index: 10;
    }
    .content1{
      background-color: rgba(125, 175, 138, 0.59);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 5px;
      font-family: sans-serif;
      /*text-align: center;*/
      line-height: 1;
      /*max-width: 50%;*/
      /*max-height: 50%;*/
      padding: 10px 10px;
      color: #fff;
        width: 100%;
        height: 420px;
        border-radius:10px;
    }
    .content2{
      background-color: rgba(86, 153, 225, 0.547);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 5px;
      font-family: sans-serif;
      /*text-align: center;*/
      line-height: 1;
      /*max-width: 50%;*/
      /*max-height: 50%;*/
      padding: 10px 10px;
      color: #fff;
        width: 100%;
        height: 600px;
        border-radius:10px;
        z-index: 10;
    }
    .content3{
      background-color: rgba(92, 214, 241, 0.516);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 5px;
      font-family: sans-serif;
      /*text-align: center;*/
      line-height: 1;
      /*max-width: 50%;*/
      /*max-height: 50%;*/
      padding: 10px 10px;
      color: #fff;
        width: 100%;
        height: 1300px;
        border-radius:10px;
    }
    .MsoNormal{
        padding: 10px 30px;
        border-radius:10px;
    }
    .words{
        padding: 10px 10px;
        font-size: 3px;
        font-weight: bold;
        color:darkslategrey;
    }
    .demonstration {
        color: var(--el-text-color-secondary);
      }
    .el-carousel__item h3 {
      color: #475669;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      text-align: center;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
</style>
