<template>
  <div class="singleproductbodypart2">
    <p>YOU MAY ALSO LIKE....</p>
    <div class="singleproductbodypart2-1">
      <md-card>
        <md-card-media>
          <!-- swiper -->
          <swiper :options="swiperOption">


            <swiper-slide>
              <div class="theshopbodypart2-2-1-box1">
                <img src="https://s2.ax1x.com/2019/03/12/APydXV.jpg">
                <p class="p-1">NEW</p>                 
                <p class="p-2">SALE</p>
                <span>
                  <a href>NOW CLOCK - BLACK/COPPER</a> $99.00
                </span>
                <a href class="a-button">Add to Cart</a>
              </div>
            </swiper-slide>


            <swiper-slide>
              <div class="theshopbodypart2-2-1-box2">
                <img src="https://s2.ax1x.com/2019/03/12/APyUlq.jpg">
                <p class="p-1">NEW</p>
                <p class="p-2">SALE</p>
                <span>
                  <a href>THE GREEN CHAIR - BLACK</a>
                  <font>$399.00</font>&nbsp;&nbsp;$299.00
                </span>
                <a href class="a-button">Add to Cart</a>
              </div>
            </swiper-slide>


            <swiper-slide>
              <div class="theshopbodypart2-2-1-box3">
                <img src="https://s2.ax1x.com/2019/03/12/APyNpn.jpg">
                <p class="p-1">NEW</p>                 
                <p class="p-2">SALE</p>
                <span>
                  <a href>HAIKU TABLE LAMP - BIRCH</a> $299.00
                </span>
                <a href class="a-button">Add to Cart</a>
              </div>
            </swiper-slide>


            <swiper-slide>
              <div class="theshopbodypart2-2-2-box1">
                <img src="https://s2.ax1x.com/2019/03/12/APgK61.jpg">
                <p class="p-1">NEW</p>                 
                <p class="p-2">SALE</p>
                <span>
                  <a href>BONGO PENDANT LAMP</a> $110.00
                </span>
                <a href class="a-button">Add to Cart</a>
              </div>
            </swiper-slide>


            <swiper-slide>
              <div class="theshopbodypart2-2-2-box2">
                <img src="https://s2.ax1x.com/2019/03/12/APgZY4.jpg">
                <p class="p-1">NEW</p>         
                <p class="p-2">SALE</p>
                <span>
                  <a href>LARGE AZTEC PENTA + PLANT</a> $110.00
                </span>
                <a href class="a-button">Add to Cart</a>
              </div>
            </swiper-slide>


            <swiper-slide>
              <div class="theshopbodypart2-2-2-box3">
                <img src="https://s2.ax1x.com/2019/03/12/APgnp9.jpg">
                <p class="p-1">NEW</p>              
               <p class="p-2">SALE</p>
                <span>
                  <a href>LARGE AZTEC PENTA + PLANT</a> $110.00
                </span>
                <a href class="a-button">Add to Cart</a>
              </div>
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
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
.singleproductbodypart2 {
  height: 814px;
  width: 1052px;
  p {
    display: block;
    width: 940px;
    height: 97px;
    font-size: 36px;
    font-family: initial;
    margin-top: 77px;
    color: #313131;
  }
  .singleproductbodypart2-1 {
      height: 530px;
      width:1052px;
    .theshopbodypart2-2-1-box1 {
      width: 335px;
      height: 503px;
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        width: 335px;
        height: 380px;
        position: relative;
      }
         .p-1 {
        position: absolute;
        left: 265px;
       top:-60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(135, 190, 135);
      }
      .p-2 {
        position: absolute;
        left: 265px;
        top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(223, 113, 84);
      }
      span {
        font-size: 14px;
        color: #000;
        height: 83px;
        a {
          text-decoration: none;
          letter-spacing: 2px;
          color: #313131;
          font-size: 16px;
          transition: 1s;
          display: block;
          line-height: 54px;
          &:hover {
            color: #eacc1d;
            transition: 1s;
          }
        }
      }
      .a-button {
        width: 130px;
        height: 40px;
        display: block;
        line-height: 40px;
        background-color: #eacc1d;
        font-size: 14px;
        color: #313131;
        text-decoration: none;
        transition: 1s;
        margin-left: 101px;
        &:hover {
          background-color: #313131;
          color: white;
          transition: 1s;
        }
      }
    }
    .theshopbodypart2-2-1-box2 {
      width: 335px;
      height: 503px;
      flex-direction: column;
      position: relative;
      img {
        width: 335px;
        height: 380px;
      }
      .p-1 {
        position: absolute;
        left: 265px;
       top:-60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(135, 190, 135);
      }
      .p-2 {
        position: absolute;
        left: 265px;
        top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(223, 113, 84);
      }
      span {
        font-size: 14px;
        color: #000;
        height: 83px;
        a {
          text-decoration: none;
          letter-spacing: 2px;
          color: #313131;
          font-size: 16px;
          transition: 1s;
          display: block;
          line-height: 54px;
          &:hover {
            color: #eacc1d;
            transition: 1s;
          }
        }
        font {
          text-decoration: line-through;
          color: #6e6c6c;
        }
      }
      .a-button {
        margin-top: 5px;
        width: 130px;
        height: 40px;
        display: block;
        line-height: 40px;
        background-color: #eacc1d;
        font-size: 14px;
        color: #313131;
        text-decoration: none;
        transition: 1s;
         margin-left: 101px;
        &:hover {
          background-color: #313131;
          color: white;
          transition: 1s;
        }
      }
    }
    .theshopbodypart2-2-1-box3 {
      width: 335px;
      height: 503px;
      flex-direction: column;
      position: relative;
      img {
        width: 335px;
        height: 380px;
        position: relative;
      }
         .p-1 {
        position: absolute;
        left: 265px;
       top:-60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(135, 190, 135);
      }
      .p-2 {
        position: absolute;
        left: 265px;
        top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(223, 113, 84);
      }
      span {
        font-size: 14px;
        color: #000;
        height: 83px;
        a {
          text-decoration: none;
          letter-spacing: 2px;
          color: #313131;
          font-size: 16px;
          transition: 1s;
          display: block;
          line-height: 54px;
          &:hover {
            color: #eacc1d;
            transition: 1s;
          }
        }
      }
      .a-button {
        margin-top: 5px;
        width: 130px;
        height: 40px;
        display: block;
        line-height: 40px;
        background-color: #eacc1d;
        font-size: 14px;
        color: #313131;
        text-decoration: none;
        transition: 1s;
         margin-left: 101px;
        &:hover {
          background-color: #313131;
          color: white;
          transition: 1s;
        }
      }
    }
    
     
    .theshopbodypart2-2-2-box1 {
      width: 335px;
      height: 503px;
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        width: 335px;
        height: 380px;
        position: relative;
      }
         .p-1 {
        position: absolute;
        left: 265px;
       top:-60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(135, 190, 135);
      }
      .p-2 {
        position: absolute;
        left: 265px;
        top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(223, 113, 84);
      }
      span {
        font-size: 14px;
        color: #000;
        height: 83px;
        a {
          text-decoration: none;
          letter-spacing: 2px;
          color: #313131;
          font-size: 16px;
          transition: 1s;
          display: block;
          line-height: 54px;
          &:hover {
            color: #eacc1d;
            transition: 1s;
          }
        }
      }
      .a-button {
        width: 130px;
        height: 40px;
        display: block;
        line-height: 40px;
        background-color: #eacc1d;
        font-size: 14px;
        color: #313131;
        text-decoration: none;
        transition: 1s;
         margin-left: 101px;
        &:hover {
          background-color: #313131;
          color: white;
          transition: 1s;
        }
      }
    }
    .theshopbodypart2-2-2-box2 {
        width: 335px;
        height: 503px;
         flex-direction: column;
        position: relative;
        img {
          width: 335px;
          height: 380px;
          position: relative;
        }
          .p-1 {
        position: absolute;
        left: 265px;
       top:-60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(135, 190, 135);
      }
      .p-2 {
        position: absolute;
        left: 265px;
        top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(223, 113, 84);
      }
        span {
          font-size: 14px;
          color: #000;
          height: 83px;
          a {
            text-decoration: none;
            letter-spacing: 2px;
            color: #313131;
            font-size: 16px;
            transition: 1s;
            display: block;
            line-height: 54px;
            &:hover {
              color: #eacc1d;
              transition: 1s;
            }
          }
        }
        .a-button {
            margin-top: 5px;
          width: 130px;
          height: 40px;
          display: block;
          line-height: 40px;
         background-color: #eacc1d;
          font-size: 14px;
          color: #313131;
          text-decoration: none;
          transition: 1s;
          margin-left: 101px;
          &:hover{
              background-color: #313131;
          color:white ;
          transition: 1s;
          }
        }
      }
    .theshopbodypart2-2-2-box3 {
      width: 335px;
      height: 503px;

      flex-direction: column;
      position: relative;
      img {
        width: 335px;
        height: 380px;
        position: relative;
      }
        .p-1 {
        position: absolute;
        left: 265px;
       top:-60px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(135, 190, 135);
      }
      .p-2 {
        position: absolute;
        left: 265px;
        top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 21px;
        border-radius: 3px;
        font-size: 12px;
        background-color: rgb(223, 113, 84);
      }
      span {
        font-size: 14px;
        color: #000;
        height: 83px;
        a {
          text-decoration: none;
          letter-spacing: 2px;
          color: #313131;
          font-size: 16px;
          transition: 1s;
          display: block;
          line-height: 54px;
          &:hover {
            color: #eacc1d;
            transition: 1s;
          }
        }
      }
      .a-button {
        margin-top: 5px;
        width: 130px;
        height: 40px;
        display: block;
        line-height: 40px;
        background-color: #eacc1d;
        font-size: 14px;
        color: #313131;
        text-decoration: none;
        transition: 1s;
         margin-left: 101px;
        &:hover {
          background-color: #313131;
          color: white;
          transition: 1s;
        }
      }
    }
    }
  }

</style>
