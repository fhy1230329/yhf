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
        <swiper-slide ><div class="class-1"></div></swiper-slide>
        <swiper-slide ><div class="class-2"></div></swiper-slide>
        <swiper-slide ><div class="class-3"></div></swiper-slide>
        <swiper-slide ><div class="class-4"></div></swiper-slide>
        <swiper-slide ><div class="class-5"></div></swiper-slide>
        <swiper-slide ><div class="class-6"></div></swiper-slide>
        <swiper-slide ><div class="class-7"></div></swiper-slide>
        <swiper-slide ><div class="class-8"></div></swiper-slide>
        <swiper-slide ><div class="class-9"></div></swiper-slide>
        <swiper-slide ><div class="class-10"></div></swiper-slide>
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
          slidesPerView: 5.2,
          spaceBetween: 115,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
}
</script>
<style lang="less" scoped>
   .bodypart6{
      width: 100%;
      height: 515px;
      background-color:rgb(245,245, 245) ; 
    .bodypart6-1 {
    height: 248px;
    width: 100%;
    background-color: rgb(245, 245, 245);
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
   .bodypart6-2{
    width: 1200px;
    height: 120px;
    margin-left: 362px;
    
}
    .class-1{
        width: 96px;
        height: 95px;
        background-color: antiquewhite;
        background: url(https://s2.ax1x.com/2019/02/28/k7aq56.png) no-repeat;
        background-size: 96px 95px;
        margin-left: 20px;
    }
    .class-2{
        width: 163px;
        height: 94px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7aX8O.png) no-repeat;
         background-size: 163px 94px;
    }
    .class-3{
        width: 125px;
        height: 104px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7aj2D.png) no-repeat;
         background-size: 125px 104px;
    }
    .class-4{
        width: 154px;
        height: 109px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7aOPK.png) no-repeat;
         background-size: 154px 109px;
    }
    .class-5{
        width: 144px;
        height: 94px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7avxe.png) no-repeat;
         background-size: 144px 94px;
         margin-right: 500px;
    }
    .class-6{
        background-color: antiquewhite;
        width: 96px;
        height: 95px;
        background: url(https://s2.ax1x.com/2019/02/28/k7aq56.png) no-repeat;
        background-size: 96px 95px;
    }
    .class-7{
        width: 163px;
        height: 94px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7aX8O.png) no-repeat;
         background-size: 163px 94px;
    }
    .class-8{
        width: 125px;
        height: 104px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7aj2D.png) no-repeat;
         background-size: 125px 104px;
    }
    .class-9{
      width: 154px;
        height: 109px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7aOPK.png) no-repeat;
         background-size: 154px 109px;
    }
    .class-10{
        width: 144px;
        height: 94px;
        background-color: antiquewhite;
         background: url(https://s2.ax1x.com/2019/02/28/k7avxe.png) no-repeat;
         background-size: 144px 94px;
    }
.swiper-button-prev{
    height: 18px;
}
.swiper-button-next{
    height: 18px;
}
</style>