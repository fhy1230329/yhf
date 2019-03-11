<template>
  <div class="theshopheader">
<div class="theshopheader-left">
    <p>SHARE</p>
   <a href=""> <img src="https://s2.ax1x.com/2019/02/27/kTSKde.png" class="img1"></a>
     <a href=""> <img src="https://s2.ax1x.com/2019/02/27/kTSlid.png" class="img2"></a>
    <a href="">  <img src="https://s2.ax1x.com/2019/03/11/ACtma6.png" class="img3"></a>
    </div>
    <div class="theshopheader-center">
        <p>FREE SHIPPING FOR STANDARD ORDER OVER $100</p>
    </div>
    <div class="theshopheader-right">
        <a href="">SIGN IN</a>&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;<a href="">REGISTER</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.theshopheader {
  width: 1174px;
  height: 50px;
  display: flex;
  flex-direction: row;
  .theshopheader-left{
      height: 50px;
      width: 200px;
      display: flex;
  flex-direction: row;

  p{
      font-size: 12px;
      line-height: 50px;
      
  }
  .img1{
      width: 9px;
      height: 15px;
      margin-top: 17px;
      margin-left: 26px;
  }
  .img2{
      width: 14px;
      height: 12px;
       margin-top: 19px;
        margin-left: 26px;
  }
  .img3{
      width: 14px;
      height: 14px;
       margin-top: 18px;
        margin-left: 26px;
  }
  }
  .theshopheader-center{
      margin-left: 197px;
      height: 50px;
      width: 362px;
      p{
          display: block;
          line-height: 50px;
          font-size:12px;
          letter-spacing: 2px;
      }
  }
  .theshopheader-right{
      margin-left: 260px;
      a{
          font-size:12px; 
          text-decoration: none;
          line-height: 50px;
          color: #313131;
          }
          span{
              font-size: 12px;
          }
  }
}
</style>
