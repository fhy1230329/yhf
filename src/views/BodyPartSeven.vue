<template>
    <div class="bodypart7">
      <div class="bodypart7-1">
      <h2>WHAT OUR CLIENT SAYS</h2>
      <img src="https://s2.ax1x.com/2019/02/25/k5IKQ1.png">
    </div>  
    <div class="bodypart7-2">
 <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="class-1">
            <div class="class-1-1">
                <p>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et <br>
             hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis<br> 
             sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia<br>
              massa</p>
              <img src="https://s2.ax1x.com/2019/02/28/k781w8.jpg">
              <font>LINDA CAMPBELL <br><span>CEO Finanace Theme Group</span></font>
              </div>
              <div class="class-1-2">
                <p>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et <br>
             hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis<br> 
             sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia<br>
              massa</p>
              <img src="https://s2.ax1x.com/2019/02/28/k71d9s.jpg">
              <font>JOHN WALKER <br><span>Photographer</span></font>
              </div>    
        </swiper-slide>
        <swiper-slide class="class-2">
            <div class="class-2-1">
                <p>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et <br>
             hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis<br> 
             sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia<br>
              massa</p>
              <img src="https://s2.ax1x.com/2019/02/28/k78MOP.jpg">
              <font>CHERYL CRUZ <br><span>Marketing Manager</span></font>
              </div>
              <div class="class-2-2">
                <p>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et <br>
             hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis<br> 
             sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia<br>
              massa</p>
              <img src="https://s2.ax1x.com/2019/02/28/k78lef.jpg">
              <font>JAMES SMITH <br><span>Senior Finance Manager</span></font>
              </div>    
        </swiper-slide>
        <swiper-slide class="class-3">
            <div class="class-3-1">
                <p>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et <br>
             hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis<br> 
             sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia<br>
              massa</p>
              <img src="https://s2.ax1x.com/2019/02/28/k783TS.jpg">
              <font>ROBERT JOHNSON <br><span>Finance Assistant-PR Agency</span></font>
              </div>
              <div class="class-3-2">
                <p>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et <br>
             hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis<br> 
             sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia<br>
              massa</p>
              <img src="https://s2.ax1x.com/2019/02/28/k71d9s.jpg">
              <font>JOHN WALKER <br><span>Photographer</span></font>
              </div>    
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
          slidesPerView:1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
            
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }

}
</script>
<style lang="less" scoped>
   .bodypart7{
      width: 100%;
      height: 635px;
      background-color:rgb(41,39,40) ; 
       display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
      .bodypart7-1 {
    height: 248px;
    background-color: rgb(41,39,40);
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
    h2 {
      display: block;
      line-height: 24px;
    
      color: aliceblue;
    }
    img {
      width: 372px;
      height: 15px;
      margin-top: 40px;
    }
  }
   } 
   .bodypart7-2{
       width: 1200px;
       height: 292px;
        position: absolute;
        top: 248px;
   }
.class-1{
  height: 292px;
  width: 100%;
  display: flex;
  flex-direction: row;
  
  .class-1-1{
      width: 505px;
      height: 190px;
      margin-left: 55px;
      position: relative;
      P{
          font-size: 15px;
          text-align: left;
          color: #cccccc;
      }
      img{
          width: 53px;
          height: 53px;
          border: solid 3px #eacc1d;
           position: absolute;
           left: 0;
           top: 135px;  
      }
      font{
          font-size: 17px;
          color: #fdfdfd;;
          position: absolute;
          left:83px;
           top: 135px;  
           text-align: left;
           span{
               font-size: 14px;
               color: #999999;
           }
      }
  }
  .class-1-2{
      width: 505px;
      height: 190px;
      margin-left: 80px;
      position: relative;
      P{
          font-size: 15px;
          text-align: left;
          color: #cccccc;
      }
      img{
          width: 53px;
          height: 53px;
          border: solid 3px #eacc1d;
           position: absolute;
           left: 0;
           top: 135px;  
      }
      font{
          font-size: 17px;
          color: #fdfdfd;;
          position: absolute;
          left:83px;
           top: 135px;  
           text-align: left;
           span{
               font-size: 14px;
               color: #999999;
           }
      }
  }
}
.class-2{
  height: 292px;
  width: 100%;
  display: flex;
  flex-direction: row;
  
  .class-2-1{
      width: 505px;
      height: 190px;
      margin-left: 55px;
      position: relative;
      P{
          font-size: 15px;
          text-align: left;
          color: #cccccc;
      }
      img{
          width: 53px;
          height: 53px;
          border: solid 3px #eacc1d;
           position: absolute;
           left: 0;
           top: 135px;  
      }
      font{
          font-size: 17px;
          color: #fdfdfd;;
          position: absolute;
          left:83px;
           top: 135px;  
           text-align: left;
           span{
               font-size: 14px;
               color: #999999;
           }
      }
  }
  .class-2-2{
      width: 505px;
      height: 190px;
      margin-left: 80px;
      position: relative;
      P{
          font-size: 15px;
          text-align: left;
          color: #cccccc;
      }
      img{
          width: 53px;
          height: 53px;
          border: solid 3px #eacc1d;
           position: absolute;
           left: 0;
           top: 135px;  
      }
      font{
          font-size: 17px;
          color: #fdfdfd;;
          position: absolute;
          left:83px;
           top: 135px;  
           text-align: left;
           span{
               font-size: 14px;
               color: #999999;
           }
      }
  }
}
.class-3{
  height: 292px;
  width: 100%;
  display: flex;
  flex-direction: row;
  
  .class-3-1{
      width: 505px;
      height: 190px;
      margin-left: 55px;
      position: relative;
      P{
          font-size: 15px;
          text-align: left;
          color: #cccccc;
      }
      img{
          width: 53px;
          height: 53px;
          border: solid 3px #eacc1d;
           position: absolute;
           left: 0;
           top: 135px;  
      }
      font{
          font-size: 17px;
          color: #fdfdfd;;
          position: absolute;
          left:83px;
           top: 135px;  
           text-align: left;
           span{
               font-size: 14px;
               color: #999999;
           }
      }
  }
  .class-3-2{
      width: 505px;
      height: 190px;
      margin-left: 80px;
      position: relative;
      P{
          font-size: 15px;
          text-align: left;
          color: #cccccc;
      }
      img{
          width: 53px;
          height: 53px;
          border: solid 3px #eacc1d;
           position: absolute;
           left: 0;
           top: 135px;  
      }
      font{
          font-size: 17px;
          color: #fdfdfd;
          position: absolute;
          left:83px;
           top: 135px;  
           text-align: left;
           span{
               font-size: 14px;
               color: #999999;
           }
      }
  }
  }

.swiper-button-prev{
      height: 18px; 
  
}
.swiper-button-next{
      height: 18px;    
}
.swiper-pagination{
  display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
}
</style>