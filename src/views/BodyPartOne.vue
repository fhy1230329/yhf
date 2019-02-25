<template>
  <div class="bodypart1">
    <div class="bodypart1-1">
      <h2>WHAT WE DO</h2>
      <img src="https://s2.ax1x.com/2019/02/25/k5IKQ1.png">
    </div>

    <div class="bodypart1-2">
      <div class="bodypart1-2-1">
          <p>
         <span class="span1">RESIDENTIAL</span><span >    DESIGN</span> <br> 
          Quisque pulvinar libero dolor, quis <br>
          eros euismod sit amet. Proin<br>
          dapibus id diam at</p>
          <p>
           <span class="span1">OFFICE</span><span >    DESIGN</span> <br> 
          Quisque pulvinar libero dolor, quis <br>
          eros euismod sit amet. Proin<br>
          dapibus id diam at 
          </p>
      </div>
      <div class="bodypart1-2-2">
          <img src="https://s2.ax1x.com/2019/02/25/k57Llj.jpg">
          <img src="https://s2.ax1x.com/2019/02/25/k57qpQ.jpg">
      </div>
      <div class="bodypart1-2-3">
          <img src="https://s2.ax1x.com/2019/02/25/k57Hfg.jpg">
          <img src="https://s2.ax1x.com/2019/02/25/k57Llj.jpg">
      </div>
      <div class="bodypart1-2-4">
      <p>
         <span class="span2">ECOMMERCIAL</span><span >    DESIGN</span> <br> 
          Quisque pulvinar libero dolor, quis <br>
          eros euismod sit amet. Proin<br>
          dapibus id diam at</p>
          <p>
           <span class="span2">HOSPITAL</span><span >    DESIGN</span> <br> 
          Quisque pulvinar libero dolor, quis <br>
          eros euismod sit amet. Proin<br>
          dapibus id diam at 
          </p>
          </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.bodypart1 {
  width: 100%;
  height: 735px;
}
.bodypart1-1 {
  height: 265px;
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
.bodypart1-2 {
  height: 470px;
  display: flex;
    flex-direction: row;
    justify-content: center;
}
.bodypart1-2-1{
   margin-left: 31px;
    width: 270px;
    height: 350px;
    p{
      text-align: right;
      margin-bottom: 100px;
      font-size: 16px;
       .span1{
         background-color: #eacc1d;
         width: 150px;
      }
      span{
          font-size: 20px;
      }
    }
  }
  .bodypart1-2-2{
    margin-left: 31px;
    width: 270px;
    height: 350px;
    
    img{
        width: 270px;
        height: 153px;
         margin-bottom: 44px;
    }
}
.bodypart1-2-3{
    margin-left: 31px;
    width: 270px;
    height: 350px;
    
    img{
        width: 270px;
        height: 153px;
        margin-bottom: 44px;
    }
}
  .bodypart1-2-4{
       margin-left: 31px;
    width: 270px;
    height: 350px;
    p{
      text-align: left;
      margin-bottom: 100px;
      font-size: 16px;
       .span2{
         background-color: #eacc1d;
         width: 150px;
      }
      span{
          font-size: 20px;
      }
    }
}

</style>

