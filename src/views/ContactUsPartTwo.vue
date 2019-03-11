<template>
  <div class="contactuspart2">
    <div class="contactuspart2-1">
      <p>SEND US A MESSAGE</p>
      <input type="text" class="text1" placeholder="Your Name">
      <input type="text" class="text2" placeholder="Your Email">
      <input type="text" class="text3" placeholder="Phone Number">
      <textarea name="textarea" class="textarea" placeholder="Your Messages"></textarea>
      <a href>SEND MAIL</a>
    </div>
    <div class="contactuspart2-2">
        <p class="p1">CONTACT INFO</p>
        <p class="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus <br>
         arcu, malesuada a est eget, maximus efficitur sapien.</p>
         <div class="message-box">
             <div class="message-box1">
                 <img src="https://s2.ax1x.com/2019/03/11/A9fvGQ.png">
                 <p> 8th floor, 379 Hudson St, New York, NY 10018</p>
             </div>
              <div class="message-box2">
                   <img src="https://s2.ax1x.com/2019/03/11/A9hpMn.png">
                 <p> (+1) 96 716 6879</p>
              </div>
               <div class="message-box3">
                    <img src="https://s2.ax1x.com/2019/03/11/A9fzxs.png">
                 <p> (+1) 96 716 6879</p>
               </div>
                <div class="message-box4">
                     <img src="https://s2.ax1x.com/2019/03/11/A9fx2j.png">
                 <p> contact@arc.com</p>
                </div>
                 <div class="message-box5">
                      <img src="https://s2.ax1x.com/2019/03/11/A9h9rq.png">
                 <p>  Mon-Fri 09:00 - 17:00</p>
                 </div>
         </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.contactuspart2 {
  width: 1108px;
  height: 1109px;
  display: flex;
  flex-direction: row;
  .contactuspart2-1 {
    width: 542px;
    height: 1109px;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 26px;
      font-family: initial;
      color: #313131;
      display: block;
      height: 50px;
      line-height: 28px;
      text-align: left;
    }
    .text1 {
      width: 542px;
      height: 51px;
      border-radius: 3px;
      outline-style: none;
      background: none;
      border: solid 1px rgb(230, 230, 230);
      border-radius: 3px;
      padding-left: 14px;
      color: rgb(230, 230, 230);
      font-size: 14px;
      &:focus {
        border: solid 1px #eacc1d;
      }
    }
    .text2 {
      width: 542px;
      margin-top: 11px;
      height: 51px;
      border-radius: 3px;
      outline-style: none;
      background: none;
       font-size: 14px;
      border: solid 1px rgb(230, 230, 230);
      border-radius: 3px;
      padding-left: 14px;
      color: rgb(230, 230, 230);
      &:focus {
        border: solid 1px #eacc1d;
      }
    }
    .text3 {
      width: 542px;
      height: 51px;
       margin-top: 11px;
      border-radius: 3px;
      outline-style: none;
      background: none;
      border: solid 1px rgb(230, 230, 230);
      border-radius: 3px;
      padding-left: 14px;
       font-size: 14px;
      color: rgb(230, 230, 230);
      &:focus {
        border: solid 1px #eacc1d;
      }
    }
     .textarea {
      width: 542px;
      height: 140px;
       margin-top: 11px;
      border-radius: 3px;
      outline-style: none;
      background: none;
      border: solid 1px rgb(230, 230, 230);
      border-radius: 3px;
      padding-left: 14px;
       font-size: 14px;
      color: rgb(230, 230, 230);
      &:focus {
        border: solid 1px #eacc1d;
      }
    }
    a{
        display: block;
        width: 188px;
        height: 40px;
        background-color: #eacc1d;
        color: #313131;
        text-decoration: none;
        font-size: 14px;
        line-height: 40px;
        transition: 1s;
        margin-top: 32px;
        &:hover{
            background-color: #313131;
            color: white;
            transition: 1s;
        }
    }
  }
  .contactuspart2-2 {
    width: 512px;
    height: 462px;
    margin-top: 110px;
    margin-left: 54px;
    .p1 {
      font-size: 26px;
      font-family: initial;
      color: #313131;
      display: block;
      height: 50px;
      line-height: 28px;
      text-align: left;
    }
    .p2{
        text-align: left;
        font-size: 15px;
        color: #313131;
        line-height: 28px;
// background-color: #eacc1d;
    }
    .message-box{
        width: 512px;
        height:208px;
        display: flex;
        flex-direction: column;
    }
    .message-box1{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20px;
        img{
            width: 15px;
            height: 14px;
            margin-top: 3px;
            margin-right: 12px;
        }
        p{
            font-size: 15px;
        }
    }
      .message-box2{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20px;
        margin-top: 20px;
        img{
            width: 15px;
            height: 14px;
            margin-top: 3px;
            margin-right: 12px;
        }
        p{
            font-size: 15px;
        }
    }
    .message-box3{
        display: flex;
        margin-top: 20px;
        flex-direction: row;
        width: 100%;
        height: 20px;
        img{
            width: 17px;
            height: 17px;
            margin-top: 1px;
            margin-right: 12px;
        }
        p{
            font-size: 15px;
        }
    }
    .message-box4{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20px;
        margin-top: 20px;
        img{
            width: 18px;
            height: 14px;
            margin-top: 3px;
            margin-right: 12px;
        }
        p{
            font-size: 15px;
        }
    }
    .message-box5{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20px;
        margin-top: 20px;
        img{
            width: 16px;
            height: 16px;
            margin-top: 2px;
            margin-right: 12px;
        }
        p{
            font-size: 15px;
        }
    }
  }
}
</style>
