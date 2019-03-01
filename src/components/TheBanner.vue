<template>
  <div class="thebanner">
    <md-card>
      <md-card-media>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="slide-1">
              <div class="slide-1-1"> 
              <p >bedroom interior</p>
              <font >DESIGN AWARDS</font>
              <div class="a-box">
                 <a href="" class="a-1">OUR PROJECTS</a>
               <a href="" class="a-2">GET A QUPTE</a>
               </div>
            </div>
             </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-2">
              <div class="slide-2-1"> 
               <p >bedroom interior</p>
              <font >DESIGN AWARDS</font>
              <div class="a-box">
                 <a href="" class="a-1">OUR PROJECTS</a>
               <a href="" class="a-2">GET A QUPTE</a>
               </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-3">
              <div class="slide-3-1"> 
               <p >bedroom interior</p>
              <font >DESIGN AWARDS</font>
              <div class="a-box">
                 <a href="" class="a-1">OUR PROJECTS</a>
               <a href="" class="a-2">GET A QUPTE</a>
               </div>
            </div>
             </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </md-card-media>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style  lang="less" scoped>
.animated {animation-duration: 0.5s;}
.thebanner{
  width: 100%;
  height: 872px;
  background-color: aliceblue;
}
.slide-1{
  width: 100%;
  height: 872px;
  background:url( https://s2.ax1x.com/2019/03/01/kHNWAx.png) no-repeat;
  background-size: 100% 872px;
  position: relative;
  .slide-1-1{
    position: absolute;
    width: 580px;
    height:216px;
    margin-top:328px ;
    margin-left: 670px;
    p{
      display: block;
      font-size: 26px;
      color:#fff;
      height: 26px;
      line-height: 26px;
      letter-spacing: 8px;
       font-family: initial;
    }
    font{
        font-size: 56px;
        height: 56px;
        display: block;
        color: #fff;
        margin-top: 25px;
        letter-spacing: 8px;
      }
    .a-box{ display: flex;
    flex-direction: row;
    margin-left: 126px;
    margin-top: 54px;
     .a-1{
      width: 156px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #313131;
      text-decoration: none;
      display: block;
      background-color: #eacc1d;
      transition: 1s;
      &:hover{
        background-color: #313131;
        color: #fff;
        transition: 1s;
      }
    }
    .a-2{
      width: 156px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #313131;
      text-decoration: none;
      display: block;
      background-color:#ffffff;
      margin-left: 16px;
      transition: 1s;
      &:hover{
        background-color: #313131;
        color: #fff;
        transition: 1s;
      }
    }
    }
  }
}
.slide-2{
  width: 100%;
  height: 872px;
  background:url( https://s2.ax1x.com/2019/03/01/kHNfN6.png) no-repeat;
  background-size: 100% 872px;
   .slide-2-1{
    position: absolute;
    width: 580px;
    height:216px;
    margin-top:328px ;
    margin-left: 670px;
    p{
      display: block;
      font-size: 26px;
      color:#fff;
      height: 26px;
      line-height: 26px;
      letter-spacing: 8px;
       font-family: initial;
    }
    font{
      letter-spacing: 8px;
        font-size: 56px;
        height: 56px;
        display: block;
        color: #fff;
        margin-top: 25px;
      }
    .a-box{ display: flex;
    flex-direction: row;
    margin-left: 126px;
    margin-top: 54px;
     .a-1{
      width: 156px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #313131;
      text-decoration: none;
      display: block;
      background-color: #eacc1d;
      transition: 1s;
      &:hover{
        background-color: #313131;
        color: #fff;
        transition: 1s;
      }
    }
    .a-2{
      width: 156px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #313131;
      text-decoration: none;
      display: block;
      background-color:#ffffff;
      margin-left: 16px;
      transition: 1s;
      &:hover{
        background-color: #313131;
        color: #fff;
        transition: 1s;
      }
    }
    
    }
   
  }
}

.slide-3{
  width: 100%;
  height: 872px;
   background:url( https://s2.ax1x.com/2019/03/01/kHNh4K.png) no-repeat;
   background-size: 100% 872px;
    .slide-3-1{
    position: absolute;
    width: 580px;
    height:216px;
    margin-top:328px ;
    margin-left: 670px;
    p{
      display: block;
      font-size: 26px;
      color:#fff;
      height: 26px;
      line-height: 26px;
      letter-spacing: 8px;
       font-family: initial;
    }
    font{
      letter-spacing: 8px;
        font-size: 56px;
        height: 56px;
        display: block;
        color: #fff;
        margin-top: 25px;
      }
    .a-box{ display: flex;
    flex-direction: row;
    margin-left: 126px;
    margin-top: 54px;
     .a-1{
      width: 156px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #313131;
      text-decoration: none;
      display: block;
      background-color: #eacc1d;
      transition: 1s;
      &:hover{
        background-color: #313131;
        color: #fff;
        transition: 1s;
      }
    }
    .a-2{
      width: 156px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #313131;
      text-decoration: none;
      display: block;
      background-color:#ffffff;
      margin-left: 16px;
      transition: 1s;
      &:hover{
        background-color: #313131;
        color: #fff;
        transition: 1s;
      }
    }
    
    }
   
  }
}
.swiper-button-prev{
  margin-left: 40px;
}
.swiper-button-next{
  margin-right: 40px;
}

</style>
 
