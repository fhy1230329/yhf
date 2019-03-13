<template>
  <div class="theshopcartbodypart2">
    <div class="theshopcartbodypart2-1">
      <p class="p-t">CART TOTALS</p>
      <p class="p-b">Subtotal:
        <b>$17,599.00</b>
      </p>
    </div>
    <div class="theshopcartbodypart2-2">
        <p>Shipping:	
        <span>There are no shipping methods available. Please double check your address, or contact us if you need any help.</span>
        </p>
        <a href="" class="a-t">Calculate Shopping</a>
        <select name="select" class="select"  >
            <option>Select a country...</option>
             <option>Select a country...</option>
             <option>Select a country...</option>
             <option>Select a country...</option>
             <option>Select a country...</option>
             <option>Select a country...</option>
           <option>Select a country...</option>
        </select>
        <input type="text" class="text1" placeholder="State  /  country">
         <input type="text" class="text2" placeholder="Postcode  /  Zip">
         <a href=""  class="a-b">Update Totals</a>
    </div>
    <div class="theshopcartbodypart2-3">
         <p class="p-c">Total:
        <b>$17,599.00</b>
      </p>
     <div class="a-button"> <a href="">Proced to Checkout</a></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.theshopcartbodypart2 {
  width: 1052px;
  height: 672px;
  border: solid 1px rgb(242, 242, 242);
  margin-top: 24px;
  margin-bottom: 60px;
  .theshopcartbodypart2-1 {
    height: 117px;
    width: 940px;
    border-bottom: dashed 1px rgb(228, 225, 225);
    margin-left: 56px;
    margin-top: 31px;
    .p-t {
      text-align: left;
      line-height: 55px;
      font-size: 18px;
      font-family: initial;
      color: rgb(51, 51, 51);
      letter-spacing: 2px;
    }
    .p-b {
      text-align: left;
      margin-left: 13px;
      color: rgb(102, 102, 102);
      font-size: 15px;
      b {
        color: rgb(85, 85, 85);
        font-size: 17px;
        margin-left: 37px;
      }
    }
  }
  .theshopcartbodypart2-2 {
    width: 940px;
    height: 349px;
    border-bottom: dashed 1px rgb(228, 225, 225);
    margin-left: 56px;
    display: flex;
    flex-direction: column;
      p{
      text-align: left;
      margin-left: 13px;
      color: rgb(102, 102, 102);
      font-size: 15px;
    height: 29px;
      line-height: 20px;
      margin-top: 25px;
      span{
        color: rgb(85, 85, 85);
        margin-left: 37px;
      }
    }
    .a-t {
      width: 187px;
      height: 40px;
      text-decoration: none;
      color: #464444;
      background: none;
      border: solid 2px rgb(242, 242, 242);
      font-size: 14px;
      line-height: 40px;
      transition: 1s;
      letter-spacing: 1px;
      margin-left: 108px;
      &:hover {
        border: solid 2px #eacc1d;
        transition: 1s;
      }
    }
.select{
      width: 832px;
      height: 40px;
      background-color: rgb(242, 242, 242);
      outline: none;
      padding-left: 15px;
      font-size: 13px;
      border: none;
      margin-top: 13px;
      margin-left: 108px;
      color: rgb(109, 109, 108);
    }
.text1 {
      width: 832px;
      height: 40px;
      background-color: rgb(242, 242, 242);
      outline: none;
      padding-left: 20px;
      font-size: 13px;
      border: none;
      margin-top: 13px;
      margin-left: 108px;
    }
.text2 {
      width: 832px;
      height: 40px;
      background-color: rgb(242, 242, 242);
      outline: none;
      padding-left: 20px;
      font-size: 13px;
      border: none;
      margin-top: 13px;
      margin-left: 108px;
    }
    .a-b {
      width: 150px;
      height: 40px;
      text-decoration: none;
      color: #464444;
      background: none;
      border: solid 2px rgb(242, 242, 242);
      font-size: 14px;
      line-height: 40px;
      transition: 1s;
      letter-spacing: 1px;
      margin-left: 108px;
      margin-top: 13px;
      &:hover {
        border: solid 2px #eacc1d;
        transition: 1s;
      }
    }
  }
  .theshopcartbodypart2-3{
      height: 121px;
       width: 940px;
       margin-left: 56px;
       .p-c {
           line-height: 80px;
           height: 80px;
      text-align: left;
      margin-left: 13px;
      color: rgb(102, 102, 102);
      font-size: 15px;
      height: 80px;
      b {
        color: rgb(85, 85, 85);
        font-size: 17px;
        margin-left: 60px;
      }
    }
    .a-button{
        background-color: #eacc1d; 
        width: 940px;
        height: 40px;
         transition: 1s;
        &:hover{
            background-color:#464444 ;
        color:white ;
        transition: 1s;
        }
    a{
       
        width: 170px;
        height: 40px;
        display: block;
        color: #464444;
        line-height: 40px;
        font-size: 14px;
        text-decoration: none;
        font-family: initial;
        transition: 1s;
        background: url(https://s2.ax1x.com/2019/03/13/AF2t58.png) no-repeat right center;
        background-size: 16px 6px;
        margin-left: 385px;
          &:hover{
        color:white ;
        transition: 1s;
         background: url(https://s2.ax1x.com/2019/03/13/AFgbcj.png) no-repeat right center;
        background-size: 16px 6px;
        }
    }
    }
  }
}
</style>
