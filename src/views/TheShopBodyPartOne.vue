<template>
  <div class="theshopbodypart1">
    <div class="theshopbodypart1-left">
      <a href=""></a>
      <input type="text" class="text" placeholder="SEARCH HERE">
    </div>
    <div class="theshopbodypart1-center">
      <img src="https://s2.ax1x.com/2019/03/11/ACaMGT.png">
    </div>
    <div class="theshopbodypart1-right">
        <a href="" class="heart"></a> &nbsp;&nbsp; &nbsp;&nbsp; <span>|</span> &nbsp;&nbsp; &nbsp;&nbsp;  <a href="" class="cart">$26,891.00</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.theshopbodypart1 {
  width: 1052px;
  height: 125px;
  display: flex;
  flex-direction: row;
  .theshopbodypart1-left {
    width: 200px;
    height: 23px;
    display: flex;
    flex-direction: row;
    margin-top: 67px;
    a {
      background: url("https://s2.ax1x.com/2019/02/22/kfnXZV.png") no-repeat
        left center;
      background-size: 23px 23px;
      display: block;
      width: 23px;
      height: 23px;
      transition: 1s;
      &:hover {
        background: url("https://s2.ax1x.com/2019/02/25/k5G9TH.png") no-repeat
          left center;
        transition: 1s;
        background-size: 23px 23px;
        display: block;
        width: 23px;
        height: 23px;
      }
    }
    .text {
      width: 150px;
      height: 23px;
      background: none;
      border: none;
      font-size: 13px;
      color: rgb(230, 230, 230);
      padding-left: 18px;
      font-family: initial;
      outline: none;
    }
  }
  .theshopbodypart1-center{
margin-left:257px;
width: 122px;
height: 30px;
margin-top: 60px;
img{
    width: 122px;
height: 30px;
}
  }
  .theshopbodypart1-right{
      width: 195px;
      height: 20px;
      margin-left: 250px;
      display: flex;
      flex-direction: row;
      margin-top: 75px;
      span{
          font-size: 15px;
      }
      .heart{
          background: url("https://s2.ax1x.com/2019/03/11/ACslkj.png") no-repeat left center;
          background-size: 17px 17px;
          width: 17px;
          height: 17px;
      }
      .cart{
  background: url("https://s2.ax1x.com/2019/02/22/kfnLq0.png") no-repeat;
  background-size: 12px 17px;
  display: block;
  height: 20px;
  font-size: 15px;
text-decoration: none;
color: #313131;
padding-left: 30px;
transition: 1s;
  &:hover {
  background: url("https://s2.ax1x.com/2019/02/25/k5GPkd.png") no-repeat ;
  background-size: 12px 17px;
  display: block;
  height: 20px;
  color: #eacc1d;
  transition: 1s;
}
}


  }
}
</style>
