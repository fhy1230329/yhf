<template>
  <div class="thefoot">
    <div class="thefoot-top">
      <div class="thefoot-top-left">
        <img src="https://s2.ax1x.com/2019/02/27/kofJK0.png">
      </div>
      <div class="thefoot-top-center">
        <ul>
          <li>
            <a href>GALLERY</a>
          </li>
          <li>
            <a href>PRODUCTS</a>
          </li>
          <li>
            <a href>NEWS</a>
          </li>
          <li>
            <a href>ABOUT</a>
          </li>
          <li>
            <a href>PRIVACY POLICY</a>
          </li>
        </ul>
      </div>
      <div class="thefoot-top-right">
        <a href class="ic-fb">
          <div class="facebook"></div>
        </a>
        <a href class="ic-tw">
          <div class="twitter"></div>
        </a>
        <a href class="ic-gl">
          <div class="google"></div>
        </a>
        <a href class="ic-yt">
          <div class="youtube"></div>
        </a>
        <a href class="ic-ins">
          <div class="instgram"></div>
        </a>
      </div>
    </div>
    <div class="thefoot-bottom">
      <p>
        Copyright © 2016 Designed by
        <span>AuThemes.</span>All rights reserved.
      </p>
    </div>
    <div class="gotop">
      <a id="goTopBtn" href="#">
        <p>^</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="less" scoped>
.thefoot {
  width: 100%;
  height: 177px;
  .thefoot-top {
    width: 100%;
    height: 138px;
    background-color: #333333;
    display: flex;
    flex-direction: row;
    .thefoot-top-left {
      width: 230px;
      height: 138px;
      img {
        margin-top: 53px;
      }
    }
    .thefoot-top-center {
      width: 750px;
      height: 138px;
      margin-left: 345px;
      ul {
        display: flex;
        flex-direction: row;
        width: 750px;
        height: 138px;
        list-style: none;
        li {
          list-style: none;
          margin-left: 33px;
        }
        a {
          display: block;
          line-height: 138px;
          height: 138px;
          text-decoration: none;
          color: rgb(162, 162, 162);
          font-size: 12px;
          letter-spacing: 1.5px;
          font-family: sans-serif;
          transition: 1s;
        }
      }
    }
    .thefoot-top-center ul li a:hover {
      color: #fff;
      transition: 1s;
    }

    .thefoot-top-center ul li:not(:last-child) a::after {
      content: "|";
      margin-left: 33px;
      color: #757474;
    }
    .thefoot-top-right {
      width: 230px;
      height: 38px;
      margin-left: 312px;
      margin-top: 55px;
      display: flex;
      flex-direction: row;
      .ic-fb {
        width: 38px;
        height: 38px;
        background-color: #eacc1d;
        margin-right: 8px;
        .facebook {
          display: block;
          width: 9px;
          height: 15px;
          margin-top: 11px;
          margin-left: 15px;
          background: url("https://s2.ax1x.com/2019/02/27/kTSKde.png") no-repeat;
          background-size: 9px 15px;
        }
      }

      .ic-tw {
        width: 38px;
        height: 38px;
        background-color: rgb(72, 72, 72);
        margin-right: 8px;
        transition: 1s;
        .twitter {
          display: block;
          width: 15px;
          height: 13px;
          margin-top: 11px;
          margin-left: 12px;
          background: url("https://s2.ax1x.com/2019/02/27/kTSJQP.png") no-repeat;
          background-size: 15px 13px;
          transition: 1s;
        }
        &:hover {
          background-color: #eacc1d;
          .twitter {
            background: url("https://s2.ax1x.com/2019/02/27/kTSlid.png")
              no-repeat;
            background-size: 15px 13px;
          }
        }
      }

      .ic-gl {
        width: 38px;
        height: 38px;
        background-color: rgb(72, 72, 72);
        margin-right: 8px;
        transition: 1s;
        .google {
          display: block;
          width: 21px;
          height: 15px;
          margin-top: 11px;
          margin-left: 10px;
          background: url("https://s2.ax1x.com/2019/02/27/kTS3RI.png") no-repeat;
          background-size: 21px 15px;
          transition: 1s;
        }
        &:hover {
          background-color: #eacc1d;
          .google {
            background: url("https://s2.ax1x.com/2019/02/27/kTSMIH.png")
              no-repeat;
            background-size: 21px 15px;
          }
        }
      }

      .ic-yt {
        width: 38px;
        height: 38px;
        background-color: rgb(72, 72, 72);
        margin-right: 8px;
        transition: 1s;
        .youtube {
          display: block;
          width: 17px;
          height: 12px;
          margin-top: 13px;
          margin-left: 11px;
          background: url("https://s2.ax1x.com/2019/02/27/kTS1JA.png") no-repeat;
          background-size: 17px 12px;
          transition: 1s;
        }
        &:hover {
          background-color: #eacc1d;
          .youtube {
            background: url("https://s2.ax1x.com/2019/02/27/kTS8zt.png")
              no-repeat;
            background-size: 17px 12px;
          }
        }
      }

      .ic-ins {
        width: 38px;
        height: 38px;
        background-color: rgb(72, 72, 72);
        margin-right: 8px;
        transition: 1s;
        .instgram {
          display: block;
          width: 16px;
          height: 14px;
          margin-top: 11px;
          margin-left: 12px;
          background: url(https://s2.ax1x.com/2019/02/27/kTSmqO.png) no-repeat;
          background-size: 16px 14px;
          transition: 1s;
        }
        &:hover {
          background-color: #eacc1d;
          .instgram {
            background: url("https://s2.ax1x.com/2019/02/27/kTSuZD.png")
              no-repeat;
            background-size: 16px 14px;
          }
        }
      }
    }
  }
  .thefoot-bottom {
    width: 100%;
    height: 39px;
    background-color: #262626;
    p {
      font-size: 12px;
      line-height: 39px;
      display: block;
      color: rgb(148, 148, 148);
      span {
        color: #eacc1d;
      }
    }
  }
  .gotop {
    position: fixed; 
    top: 105%; 
    left: 90%;
    // margin-left: 600px; 
    margin-top: -125px; 
     transition: 1s;
  } 
  }
  .gotop a {
    display: block;
    width: 40px;
    height: 40px;
    background-color:rgba(10, 10, 10, 0.527);
    color: #fff;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
     transition: 1s;
  }
  .gotop a:hover {
    background-color: #eacc1d;
    color: rgb(24, 19, 19);
    transition: 1s;
  }

</style>
