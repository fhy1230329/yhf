<template>
  <div class="bodypart6">
    <div class="bodypart6-1">
      <h2>OUR PARTNERS</h2>
      <img src="https://s2.ax1x.com/2019/02/25/k5IKQ1.png">
    </div>
    <div class="bodypart6-2">
      <md-card>
        <md-card-media>
          <!-- swiper -->
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <div class="class-1"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-2"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-3"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-4"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-5"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-6"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-7"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-8"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-9"></div>
            </swiper-slide>
            <swiper-slide>
              <div class="class-10"></div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </md-card-media>
      </md-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 5,
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
<style lang="less" scoped>
.bodypart6 {
  width: 100%;
  height: 515px;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .bodypart6-1 {
    height: 248px;
    width: 100%;
    background-color: rgb(245, 245, 245);
    position: absolute;
    top: 0px;
    h2 {
      display: block;
      line-height: 24px;
      padding-top: 120px;
    }
    img {
      width: 372px;
      height: 15px;
      margin-top: 40px;
    }
  }
}
.bodypart6-2 {
  width: 1200px;
  height: 120px;
  position: absolute;
  top: 248px;
}
.class-1 {
  width: 96px;
  height: 95px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aq56.png) no-repeat;
  background-size: 96px 95px;
  margin-left: 50px;
}
.class-2 {
  width: 163px;
  height: 94px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aX8O.png) no-repeat;
  background-size: 163px 94px;
   margin-left: 50px;
}
.class-3 {
  width: 125px;
  height: 104px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aj2D.png) no-repeat;
  background-size: 125px 104px;
   margin-left: 50px;
}
.class-4 {
  width: 154px;
  height: 109px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aOPK.png) no-repeat;
  background-size: 154px 109px;
   margin-left: 50px;
}
.class-5 {
  width: 144px;
  height: 94px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7avxe.png) no-repeat;
  background-size: 144px 94px;
  margin-right: 500px;
   margin-left: 50px;
}
.class-6 {
  background-color: antiquewhite;
  width: 96px;
  height: 95px;
  background: url(https://s2.ax1x.com/2019/02/28/k7aq56.png) no-repeat;
  background-size: 96px 95px;
   margin-left: 50px;
}
.class-7 {
  width: 163px;
  height: 94px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aX8O.png) no-repeat;
  background-size: 163px 94px;
   margin-left: 50px;
}
.class-8 {
  width: 125px;
  height: 104px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aj2D.png) no-repeat;
  background-size: 125px 104px;
   margin-left: 50px;
}
.class-9 {
  width: 154px;
  height: 109px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7aOPK.png) no-repeat;
  background-size: 154px 109px;
   margin-left: 50px;
}
.class-10 {
  width: 144px;
  height: 94px;
  background-color: antiquewhite;
  background: url(https://s2.ax1x.com/2019/02/28/k7avxe.png) no-repeat;
  background-size: 144px 94px;
   margin-left: 50px;
}
.swiper-button-prev {
  height: 18px;
}
.swiper-button-next {
  height: 18px;
}
</style>