<template>
  <div class="singleproductbodypart1">
    <div class="singleproductbodypart1-1">
      <img src="https://s2.ax1x.com/2019/03/12/APzgC4.png">
      <a href="./">Home</a>&nbsp;&nbsp;
      <span>/</span>&nbsp;&nbsp;
      <a href="/Shop">Shop</a>&nbsp;&nbsp;
      <span>/</span>&nbsp;&nbsp;
      <P>Oak & Iron Coffee Table</P>
    </div>
    <div class="singleproductbodypart1-2">
      <img src="https://s2.ax1x.com/2019/03/13/AFbxyV.jpg">
      <div class="singleproductbodypart1-2-right">
        <div class="singleproductbodypart1-2-1">
          <p class="p-t">OAK & IRON COFFEE TABLE
            <br>
            <span>$399.00</span>
            <font>$299.00</font>
          </p>
        </div>
        <div class="singleproductbodypart1-2-2">
          <div class="singleproductbodypart1-2-2-1">
            <p
              p
            >Table combines a visual lightness with material solidity, joining the stark weight of a solid oak top with an angular
              <br>iron base.
            </p>
          </div>
          <div class="singleproductbodypart1-2-2-2">
            <p>COLOR:</p>
            <div class="color-box">
              <a href class="a-l"></a>
              <a href class="a-c"></a>
              <a href class="a-r"></a>
            </div>
          </div>
          <div class="singleproductbodypart1-2-2-3">
            <p>SIZE:</p>
            <div class="color-box">
              <a href>XS</a>
              <a href>S</a>
              <a href class="a-1">M</a>
              <a href>L</a>
              <a href>XL</a>
            </div>
          </div>
          <div class="singleproductbodypart1-2-2-4">
            <input type="number" class="number" placeholder="1">
            <a href>Add to cart</a>
          </div>
        </div>
        <div class="singleproductbodypart1-2-3">
          <p class="p-b">SKU : TB-01
            <br>SKU : &nbsp;
            <span>table, wood, interior design, furniture</span>
          </p>
          <div class="bottom-list">
            <!-- <input type="checkbox" class="fold-button">
            <section>
              <div class="fold-content">
                <p class="p-list1">Anim pariatur cliche reprehenderit, enim eiusmod high
                  <br>life accusamus terry richardson ad squid. 3 wolf moon
                  <br>officia aute, non cupidatat skateboard dolor brunch.
                  <br>Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                  <br>wolf moon tempor, sunt aliqua put a bird on
                </p>
              </div>
            </section> -->
            <div class="bottom-list-1">
                <a href=""><p>Description</p></a>
            </div>
            <div class="bottom-list-2">
                 <a href=""><p>Additional Information</p></a>
            </div>
            <div class="bottom-list-3">
                 <a href=""><p>Reviews</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.singleproductbodypart1 {
  height: 925px;
  width: 1052px;
  border-top: solid 1px rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  .singleproductbodypart1-1 {
    display: flex;
    flex-direction: row;
    height: 66px;
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
  .singleproductbodypart1-2 {
    display: flex;
    flex-direction: row;
    img {
      width: 550px;
      height: 632px;
    }
    .singleproductbodypart1-2-right {
      width: 409px;
      height: 790px;
      margin-left: 93px;
      display: flex;
      flex-direction: column;
      .singleproductbodypart1-2-1 {
        width: 409px;
        height: 99px;
        border-bottom: solid 1px rgb(204, 204, 204);
        .p-t {
          font: 18px;
          text-align: left;
          line-height: 30px;
          color: rgb(51, 51, 51);
          letter-spacing: 2px;
          margin-top: 16px;
          font {
            text-align: left;
            color: rgb(34, 34, 34);
            height: 26px;
            letter-spacing: 0px;
          }
          span {
            text-decoration: line-through;
            color: rgb(102, 102, 102);
            margin-right: 11px;
            letter-spacing: 0px;
          }
        }
      }
      .singleproductbodypart1-2-2 {
        height: 360px;
        width: 409px;
        display: flex;
        flex-direction: column;
        .singleproductbodypart1-2-2-1 {
          width: 410px;
          height: 78px;
          margin-top: 17px;
          p {
            text-align: left;
            color: rgb(102, 102, 102);
            line-height: 26px;
            font-size: 15px;
          }
        }
        .singleproductbodypart1-2-2-2 {
          width: 140px;
          height: 70px;
          margin-top: 13px;
          position: relative;
          p {
            position: absolute;
            top: 0px;
            font-size: 14px;
            font-family: initial;
            text-align: left;
            line-height: 37px;
            height: 37px;
            width: 140px;
          }
          .color-box {
            position: absolute;
            top: 37px;
            display: flex;
            flex-direction: row;
            width: 140px;
            height: 33px;
            .a-l {
              width: 33px;
              height: 33px;
              display: block;
              background-color: rgb(232, 140, 55);
            }
            .a-c {
              width: 33px;
              height: 33px;
              display: block;
              background-color: rgb(0, 173, 94);
              margin-left: 9px;
            }
            .a-r {
              width: 33px;
              height: 33px;
              display: block;
              background-color: rgb(45, 110, 214);
              margin-left: 9px;
            }
          }
        }
        .singleproductbodypart1-2-2-3 {
          width: 200px;
          height: 70px;
          margin-top: 23px;
          position: relative;
          p {
            position: absolute;
            top: 0px;
            font-size: 14px;
            font-family: initial;
            text-align: left;
            line-height: 37px;
            height: 37px;
            width: 140px;
          }
          .color-box {
            position: absolute;
            top: 37px;
            display: flex;
            flex-direction: row;
            width: 200px;
            height: 33px;
            a {
              width: 33px;
              height: 33px;
              display: block;
              margin-right: 9px;
              text-decoration: none;
              line-height: 33px;
              transition: 1s;
              color: #313131;
              background-color: rgb(242, 242, 242);
              &:hover {
                background-color: #313131;
                color: rgb(242, 242, 242);
                transition: 1s;
              }
            }
            .a-1 {
              width: 33px;
              height: 33px;
              display: block;
              background-color: #313131;
              color: white;
            }
          }
        }
        .singleproductbodypart1-2-2-4 {
          display: flex;
          flex-direction: row;
          width: 228px;
          height: 40px;
          margin-top: 36px;
          .number {
            width: 80px;
            height: 40px;
            border: none;
            background-color: rgb(242, 242, 242);
            padding-left: 10px;
          }
          a {
            width: 130px;
            height: 40px;
            line-height: 40px;
            background-color: #ebcd1e;
            color: #313131;
            text-decoration: none;
            font-size: 14px;
            transition: 1s;
            margin-left: 18px;
            &:hover {
              background-color: #313131;
              color: white;
              transition: 1s;
            }
          }
        }
      }
      .singleproductbodypart1-2-3 {
        width: 409px;
        height: 260px;
        margin-top: 18px;
        .p-b {
          text-align: left;
          color: rgb(102, 102, 102);
          line-height: 36px;
        //   background-color: #ebcd1e;
          span {
            color: rgb(153, 153, 153);
          }
        }
        .bottom-list {
          width: 409px;
          height: 144px;
          position: relative;
          .bottom-list-1{
               width: 409px;
          height: 48px;
          border-bottom: solid 1px #cfcdcd;
          a{
            text-decoration: none;
            color: #999;
            font-size: 15px;
            width: 150px;
            height: 40px;
             line-height: 40px;
            p{
                text-align: left;
                background: url(https://s2.ax1x.com/2019/03/13/AkiUxS.png) no-repeat left center;
            background-size: 13px 13px;
            padding-left: 35px;
            letter-spacing: 2px;
            line-height: 40px;
            padding-top: 3px;
            }
          }
          }
           .bottom-list-2{
               width: 409px;
          height: 48px;
          border-bottom: solid 1px #cfcdcd;
           a{
            text-decoration: none;
            color: #999;
            font-size: 15px;
            width: 150px;
            height: 40px;
            p{
                 padding-top: 3px;
                text-align: left;
                background: url(https://s2.ax1x.com/2019/03/13/AkiUxS.png) no-repeat left center;
            background-size: 13px 13px;
            padding-left: 35px;
            letter-spacing: 2px;
            line-height: 40px;
            }
          }
          }
           .bottom-list-3{
               width: 409px;
          height: 48px;
          border-bottom: solid 1px #cfcdcd;
           a{
            text-decoration: none;
            color: #999;
            font-size: 15px;
            width: 150px;
            height: 40px;
            p{
                 padding-top: 3px;
                text-align: left;
                background: url(https://s2.ax1x.com/2019/03/13/AkiUxS.png) no-repeat left center;
            background-size: 13px 13px;
            padding-left: 35px;
            letter-spacing: 2px;
            line-height: 40px;
            }
          }
          }
        //   .fold-button {
        //     outline: none;
        //     position: absolute;
        //     left: 0px;
        //     appearance: none;
        //     -moz-appearance: none;
        //     -webkit-appearance: none;
        //     width: 13px;
        //     height: 13px;
        //     padding-top: 4px;
        //     background: url(https://s2.ax1x.com/2019/03/13/AkiN28.png) no-repeat;
        //     background-size: 13px 5px;
        //   }
        //   .fold-button:checked {
        //     background: url(https://s2.ax1x.com/2019/03/13/AkiUxS.png) no-repeat;
        //     background-size: 13px 13px;
        //     width: 13px;
        //     height: 13px;
        //   }
        //   .fold-button + section {
        //     overflow: hidden;
        //   }
        //   .fold-button + section > div.fold-content {
        //     height: 157px;
        //     position: absolute;
        //     left: 0px;
        //     top: 20px;
        //     background: white;
        //     border-radius: 4px;
        //     opacity: 1;
        //     overflow: hidden;
        //     transition: height 1s ease-out, opacity 1s ease-out;
        //     -moz-transition: height 1s ease-out, opacity 1s ease-out;
        //     .p-list1 {
        //       text-align: left;
        //     }
        //   }
        //   .fold-button:checked + section > div.fold-content {
        //     opacity: 0;
        //     height: 0;
        //   }
          
        }
      }
    }
  }
}
</style>
