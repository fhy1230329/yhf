<template>
  <div class="bodypart4">
    <div class="bodypart4-1">
      <h2>LASTEST PROJECTS</h2>
      <img src="https://s2.ax1x.com/2019/02/25/k5IKQ1.png">
    </div>
    <div class="bodypart4-2">
      <ul>
        <li>
          <a href class="one-a"> ALL PROJECTS</a>
        </li>
        <li>
          <a href class="two-a">RESIDENTIAL</a>
        </li>
        <li>
          <a href class="three-a">ECOMMERCIAL</a>
        </li>
        <li>
          <a href class="four-a">OFFICE</a>
        </li>
        <li>
          <a href class="five-a">HOSPITALS</a>
        </li>
      </ul>
    </div>
    <div class="bodypart4-3">
      <div class="bodypart4-3-1">
        <div class="bodypart4-3-1-1">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">DREAM HOUSE</a>
            <a href="#" class="animated slideInUp">Residential</a>
          </div>
        </div>
        <div class="bodypart4-3-1-2">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">WOOD WALL CITY</a>
            <a href="#" class="animated slideInUp">Ecommercial</a>
          </div>
        </div>
        <div class="bodypart4-3-1-3">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">BATHROOM FURNITURE</a>
            <a href="#" class="animated slideInUp">Residential</a>
          </div>
        </div>
        <div class="bodypart4-3-1-4">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">LIVING ROOM DECOR</a>
            <a href="#" class="animated slideInUp">Residential</a>
          </div>
        </div>
      </div>

      <div class="bodypart4-3-2">
        <div class="bodypart4-3-2-1">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">OPEN SPACE HOUSE</a>
            <a href="#" class="animated slideInUp">Residential</a>
          </div>
        </div>
        <div class="bodypart4-3-2-2">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">DREAM HOUSE</a>
            <a href="#" class="animated slideInUp">Ecommercial</a>
          </div>
        </div>
        <div class="bodypart4-3-2-3">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">ORGANGE CORPORATE</a>
            <a href="#" class="animated slideInUp">Office</a>
          </div>
        </div>
        <div class="bodypart4-3-2-4">
          <div class="bodypart4-3-box">
            <a href="#" class="animated slideInDown">OCEAN VIEW BUILDING</a>
            <a href="#" class="animated slideInUp">Residential</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bodypart4-4">
      <a href>VIEW ALL PROJECT</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.animated {animation-duration: 0.5s;}
.bodypart4 {
  width: 100%;
  height: 1260px;
  background-color: rgb(125, 204, 197);
  .bodypart4-1 {
    height: 248px;
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
  .bodypart4-2 {
    background-color: rgb(245, 245, 245);
    height: 77px;
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 77px;
      list-style: none;
      padding-left: 535px;
      li {
        list-style: none;
        margin-left: 50px;
      }
      a {
        width: 125px;
        display: block;
        line-height: 22px;
        height: 22px;
        text-decoration: none;
        color: rgb(51, 51, 51);
        font-size: 12px;
        letter-spacing: 1.5px;
        font-family: sans-serif;
        transition: 1s;
        overflow: hidden;
        
      }
      .one-a {
        background-color: #eacc1d;
      }
      .two-a {
        width: 112px;
        &:hover{
        background-color: #eacc1d;
        }
      }
      .three-a {
        width: 128px;
        &:hover{
          background-color: #eacc1d;
        }
      }
      .four-a {
        width: 70px;
        &:hover{
          background-color: #eacc1d;
        }
      }
      .five-a {
        width: 88px;
        &:hover{
          background-color: #eacc1d;
        }
      }
    }
  }
  .bodypart4-3 {
    width: 100%;
    height: 718px;
    background-color: white;
    .bodypart4-3-1 {
      width: 100%;
      height: 359px;
      background-color: aquamarine;
      display: flex;
      flex-direction: row;
      .bodypart4-3-1-1 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTGRFe.jpg) no-repeat;
        background-size: 480px 359px;
      }
      .bodypart4-3-1-2 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTGfWd.jpg) no-repeat;
        background-size: 480px 359px;
      }
      .bodypart4-3-1-3 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTGWJH.jpg) no-repeat;
        background-size: 480px 359px;
      }
      .bodypart4-3-1-4 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTG4SA.jpg) no-repeat;
        background-size: 480px 359px;
      }
    }
       .bodypart4-3-box{
          width: 100%;
          height: 359px;
          transition: 1s;
          position: relative;
          display: flex;
            justify-content: center;
          a {
            text-decoration: none;
            font-size: 16px;
            color: #313131;
            display: none;
            // line-height: 33px;
            position:absolute;
            &:first-child{position:absolute;top: 155px;}
            &:last-child{position:absolute;top: 187px;}
          }
          &:hover {
            background-color: rgba(234, 203, 29, 0.95);
            transition: 1s;
            a {
              display: block;
              transition: 1s;
            }
          }
          
        }
    .bodypart4-3-2 {
      width: 100%;
      height: 359px;
      background-color: bisque;
      display: flex;
      flex-direction: row;
      .bodypart4-3-2-1 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTGIyt.jpg) no-repeat;
        background-size: 480px 359px;
      }
      .bodypart4-3-2-2 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTJGpd.jpg) no-repeat;
        background-size: 480px 359px;
      }
      .bodypart4-3-2-3 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTG5QI.jpg) no-repeat;
        background-size: 480px 359px;
      }
      .bodypart4-3-2-4 {
        width: 25%;
        height: 359px;
        background: url(https://s2.ax1x.com/2019/02/27/kTGoOP.jpg) no-repeat;
        background-size: 480px 359px;
      }
    }
  }
  .bodypart4-4 {
    width: 100%;
    height: 217px;
    background-color: #eacc1d;
    position: relative;
    a {
      position: absolute;
      text-decoration: none;
      display: block;
      width: 185px;
      height: 41px;
      background-color: rgb(51, 51, 51);
      font-size: 14px;
      color: #fff;
      line-height: 41px;
      transition: 1s;
      margin-left: 858px;
      margin-top: 90px;
      &:hover {
        color: rgb(51, 51, 51);
        background-color: white;
        transition: 1s;
      }
    }
  }
}
</style>




