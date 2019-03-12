<template>
  <div class="theshopcartbodypart1">
    <div class="theshopcartbodypart1-1">
      <img src="https://s2.ax1x.com/2019/03/12/APzgC4.png">
      <a href="./">Home</a>&nbsp;&nbsp;
      <span>/</span>&nbsp;&nbsp;
      <a href="/Shop">Shop</a>&nbsp;&nbsp;
      <span>/</span>&nbsp;&nbsp;
      <P>Shopping Cart</P>
    </div>
    <div class="theshopcartbodypart1-2">
      <p>
        Product
        <span class="span1">Price</span>
        <span class="span2">Quantity</span>
        <span class="span3">Total</span>
      </p>
    </div>
    <div class="theshopcartbodypart1-3">
      <div class="theshopcartbodypart1-3-1">
        <div class="theshopcartbodypart1-3-1-left">
          <img src="https://s2.ax1x.com/2019/03/12/AiFrQg.png">
          <p>
            <a href>Bed Dream</a>
            <br>Color:White
          </p>
        </div>
        <div class="theshopcartbodypart1-3-1-center">
          <p>$2,112.00</p>
          <input type="number" placeholder="2" class="number">
          <font>$2,112.00</font>
        </div>
        <div class="theshopcartbodypart1-3-1-right"></div>
      </div>
      <div class="theshopcartbodypart1-3-2">
        <div class="theshopcartbodypart1-3-2-left">
          <img src="https://s2.ax1x.com/2019/03/12/AiFyLj.png" alt>
          <p>
            <a href>Grey Soft Loft Sessel</a>
            <br>Color: Grey
          </p>
        </div>
        <div class="theshopcartbodypart1-3-2-center">
          <p>$112.00</p>
          <input type="number" placeholder="2" class="number">
          <font>$112.00</font>
        </div>
        <div class="theshopcartbodypart1-3-2-right"></div>
      </div>
      <div class="theshopcartbodypart1-3-3">
        <div class="theshopcartbodypart1-3-3-left">
          <img src="https://s2.ax1x.com/2019/03/12/AiFsyQ.png" alt>
          <p>
            <a href>Oak Sideboard</a>
            <br>Color: Yellow
          </p>
        </div>
        <div class="theshopcartbodypart1-3-3-center">
          <p>$239.00</p>
          <input type="number" placeholder="2" class="number">
          <font>$239.00</font>
        </div>
        <div class="theshopcartbodypart1-3-3-right"></div>
      </div>
    </div>
    <div class="theshopcartbodypart1-4">
      <input type="text" class="text" placeholder="Coupon code">
      <a href>APPLY COUPON</a>
      <a href class="a-1">UPDATE CART</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.theshopcartbodypart1 {
  height: 524px;
  width: 1052px;
  border-top: solid 1px #999999;
  display: flex;
  flex-direction: column;
  .theshopcartbodypart1-1 {
    display: flex;
    flex-direction: row;
    height: 126px;
    width: 1052px;
    img {
      width: 13px;
      height: 12px;
      margin-top: 19px;
    }
    a {
      font-size: 12px;
      color: #313131;
      text-decoration: none;
      line-height: 50px;
      margin-left: 5px;
    }
    span {
      font-size: 12px;
      color: #868585;
      line-height: 50px;
    }
    p {
      font-size: 12px;
      color: #757373;
      line-height: 50px;
    }
  }
  .theshopcartbodypart1-2 {
    width: 1052px;
    height: 40px;
    background-color: rgb(85, 85, 85);
    display: flex;
    flex-direction: row;
    //   position: relative;

    p {
      margin-left: 130px;
      display: flex;
      left: 0px;
      color: #b9b6b6;
      line-height: 40px;
      display: block;
      width: 610px;
      font-size: 14px;
      .span1 {
        margin-left: 240px;
      }
      .span2 {
        margin-left: 124px;
      }
      .span3 {
        margin-left: 71px;
      }
    }
  }
  .theshopcartbodypart1-3 {
    width: 1052px;
    height: 303px;
    display: flex;
    flex-direction: column;
    .theshopcartbodypart1-3-1 {
      width: 1052px;
      height: 101px;
      border: solid 1px #d3d2d2;
      border-top: none;
      display: flex;
      flex-direction: row;
      .theshopcartbodypart1-3-1-left {
        display: flex;
        flex-direction: row;
        width: 410px;
        height: 101px;
        img {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          margin-left: 25px;
        }
        p {
          font-size: 16px;
          color: #757373;
          width: 130px;
          height: 44px;
          margin-top: 28px;
          text-align: left;
          margin-left: 25px;
          a {
            text-decoration: none;
            color: #464444;
            transition: 1s;
            &:hover {
              color: #eacc1d;
              transition: 1s;
            }
          }
        }
      }
      .theshopcartbodypart1-3-1-center {
        display: flex;
        flex-direction: row;
        width: 520px;
        p {
          display: block;
          line-height: 101px;
          width: 160px;
          text-align: left;
        }
        .number {
          width: 80px;
          height: 40px;
          border: none;
          background-color: #ebe6e6;
          padding-left: 10px;
          margin-top: 30px;
        }
        font {
          display: block;
          line-height: 101px;
          margin-left: 46px;
        }
      }
      .theshopcartbodypart1-3-1-right {
        background: url(https://s2.ax1x.com/2019/03/12/AiEceH.png) no-repeat;
        background-size: 11px 11px;
        width: 11px;
        height: 11px;
        margin-top: 45px;
        transition: 1s;
        &:hover {
          background: url(https://s2.ax1x.com/2019/03/12/AiEgwd.png) no-repeat;
          background-size: 11px 11px;
          transition: 1s;
        }
      }
    }

    .theshopcartbodypart1-3-2 {
      width: 1052px;
      height: 101px;
      border: solid 1px #d3d2d2;
      border-top: none;
      display: flex;
      flex-direction: row;
      .theshopcartbodypart1-3-2-left {
        display: flex;
        flex-direction: row;
        width: 410px;
        height: 101px;
        img {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          margin-left: 25px;
        }
        p {
          font-size: 16px;
          color: #757373;
          width: 160px;
          height: 44px;
          margin-top: 28px;
          text-align: left;
          margin-left: 25px;
          a {
            text-decoration: none;
            color: #464444;
            transition: 1s;
            &:hover {
              color: #eacc1d;
              transition: 1s;
            }
          }
        }
      }
      .theshopcartbodypart1-3-2-center {
        display: flex;
        flex-direction: row;
        width: 520px;
        p {
          display: block;
          line-height: 101px;
          width: 160px;
          text-align: left;
        }
        .number {
          width: 80px;
          height: 40px;
          border: none;
          background-color: #ebe6e6;
          padding-left: 10px;
          margin-top: 30px;
        }
        font {
          display: block;
          line-height: 101px;
          margin-left: 46px;
        }
      }
      .theshopcartbodypart1-3-2-right {
        background: url(https://s2.ax1x.com/2019/03/12/AiEceH.png) no-repeat;
        background-size: 11px 11px;
        width: 11px;
        height: 11px;
        margin-top: 45px;
        transition: 1s;
        &:hover {
          background: url(https://s2.ax1x.com/2019/03/12/AiEgwd.png) no-repeat;
          background-size: 11px 11px;
          transition: 1s;
        }
      }
    }
    .theshopcartbodypart1-3-3 {
      width: 1052px;
      height: 101px;
      border: solid 1px #d3d2d2;
      border-top: none;
      display: flex;
      flex-direction: row;
      .theshopcartbodypart1-3-3-left {
        display: flex;
        flex-direction: row;
        width: 410px;
        height: 101px;
        img {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          margin-left: 25px;
        }
        p {
          font-size: 16px;
          color: #757373;
          width: 130px;
          height: 44px;
          margin-top: 28px;
          text-align: left;
          margin-left: 25px;
          a {
            text-decoration: none;
            color: #464444;
            transition: 1s;
            &:hover {
              color: #eacc1d;
              transition: 1s;
            }
          }
        }
      }
      .theshopcartbodypart1-3-3-center {
        display: flex;
        flex-direction: row;
        width: 520px;
        p {
          display: block;
          line-height: 101px;
          width: 160px;
          text-align: left;
        }
        .number {
          width: 80px;
          height: 40px;
          border: none;
          background-color: #ebe6e6;
          padding-left: 10px;
          margin-top: 30px;
        }
        font {
          display: block;
          line-height: 101px;
          margin-left: 46px;
        }
      }
      .theshopcartbodypart1-3-3-right {
        background: url(https://s2.ax1x.com/2019/03/12/AiEceH.png) no-repeat;
        background-size: 11px 11px;
        width: 11px;
        height: 11px;
        margin-top: 45px;
        transition: 1s;
        &:hover {
          background: url(https://s2.ax1x.com/2019/03/12/AiEgwd.png) no-repeat;
          background-size: 11px 11px;
          transition: 1s;
        }
      }
    }
  }
  .theshopcartbodypart1-4 {
    display: flex;
    flex-direction: row;
    width: 1052px;
    height: 55px;
    .text {
      width: 200px;
      height: 40px;
      background-color: rgb(242, 242, 242);
      outline: none;
      padding-left: 20px;
      font-size: 13px;
      border: none;
      margin-top: 15px;
    }
    a {
      width: 165px;
      height: 40px;
      text-decoration: none;
      color: #464444;
      background: none;
      border: solid 2px rgb(242, 242, 242);
      font-size: 14px;
      line-height: 40px;
      transition: 1s;
      letter-spacing: 1px;
      margin-left: 30px;
      margin-top: 15px;
      &:hover {
        border: solid 2px #eacc1d;
        transition: 1s;
      }
    }
    .a-1 {
      margin-left: 500px;
    }
  }
}
</style>

