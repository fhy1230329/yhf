<template>
  <div class="theshopbodypart1">
    <div class="theshopbodypart1-top">
      <div class="theshopbodypart1-left">
        <a href></a>
        <input type="text" class="text" placeholder="SEARCH HERE">
      </div>
      <div class="theshopbodypart1-center">
        <img src="https://s2.ax1x.com/2019/03/11/ACaMGT.png">
      </div>
      <div class="theshopbodypart1-right">
        <a href class="heart"></a> &nbsp;&nbsp; &nbsp;&nbsp;
        <span>|</span> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <a href class="cart">$26,891.00</a>
      </div>
    </div>
    <div class="theshopbodypart1-bottom">
      <ul class="nav-level-1">
        <li class="has-sub">
          <a href="./">HOME</a>
        </li>
        <li>
          <a href>FUNITURE</a>
        </li>
        <li>
          <a href>LIGHTING</a>
        </li>
        <li>
          <a href>ACCESSORIE</a>
        </li>
        <li>
          <a href="/Blog">BLOG</a>
        </li>
        <li>
          <a href="/ContactUs">CONTACT US</a>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.theshopbodypart1 {
  width: 1052px;
  height: 209px;
  display: flex;
  flex-direction: column;
 
  .theshopbodypart1-top {
    display: flex;
    flex-direction: row;
    width: 1052px;
    height: 130px;
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
        padding-left: 18px;
        font-family: initial;
        outline: none;
      }
    }
    .theshopbodypart1-center {
      margin-left: 257px;
      width: 122px;
      height: 30px;
      margin-top: 60px;
      img {
        width: 122px;
        height: 30px;
      }
    }
    .theshopbodypart1-right {
      width: 195px;
      height: 20px;
      margin-left: 250px;
      display: flex;
      flex-direction: row;
      margin-top: 75px;
      span {
        font-size: 15px;
      }
      .heart {
        background: url("https://s2.ax1x.com/2019/03/12/APwSzT.png") no-repeat
          left center;
        background-size: 16px 13px;
        width: 20px;
        height: 20px;
        transition: 1s;
        &:hover {
          background: url("https://s2.ax1x.com/2019/03/12/APw9QU.png") no-repeat
            left center;
          background-size: 16px 13px;
          transition: 1s;
        }
      }
      .cart {
        background: url("https://s2.ax1x.com/2019/02/22/kfnLq0.png") no-repeat
          left center;
        background-size: 12px 15px;
        display: block;
        height: 20px;
        font-size: 15px;
        width: 125px;
        text-decoration: none;
        color: #313131;
        padding-left: 20px;
        transition: 1s;
        &:hover {
          background: url("https://s2.ax1x.com/2019/02/25/k5GPkd.png") no-repeat
            left center;
          background-size: 12px 15px;
          display: block;

          height: 20px;
          color: #eacc1d;
          transition: 1s;
        }
      }
    }
  }
  .theshopbodypart1-bottom {
    width: 1052px;
    height: 79px;
    ul {
      display: flex;
      flex-direction: row;
      width: 850px;
      height: 79px;
      list-style: none;
      margin-left: 77px;
      li {
        list-style: none;
        margin-left: 33px;
      }
      a {
        display: block;
        line-height: 79px;
        height: 79px;
        text-decoration: none;
        color: #646262;
        font-size: 12px;
        letter-spacing: 1.5px;
        font-family: sans-serif;
        transition: 1s;
      }
    }
  }
  .theshopbodypart1-bottom ul li a:hover {
    color: #eacc1d;
    transition: 1s;
  }
  .theshopbodypart1-bottom ul li:not(:last-child) a::after {
    content: "|";
    margin-left: 33px;
    color: #757474;
  }
}
</style>
