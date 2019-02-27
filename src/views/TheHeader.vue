<template>
  <div class="header-top">
    <div class="header-left">
      <img :src="pageLogo" class="page-logo">
    </div>
    <div class="header-center">
      <ul class="nav-level-1">
        <li class="has-sub">
          <a href="#">
            <span>HOME</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">HOMEPAGE V1</a>
            </li>
            <li>
              <a href="#">HOMEPAGE V2</a>
            </li>
            <li>
              <a href="#">HOMEPAGE V3</a>
            </li>
            <li>
              <a href="#">HOMEPAGE V4</a>
            </li>
            <li>
              <a href="#">HOMEPAGE V5</a>
            </li>
            <li>
              <a href="#">HOMEPAGE V6</a>
            </li>
          </ul>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>PROJECTS</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">GRID 2 COLUMNS V1</a>
            </li>
            <li>
              <a href="#">GRID 3 COLUMNS V1</a>
            </li>
            <li>
              <a href="#">GRID 4 COLUMNS V1</a>
            </li>
            <li>
              <a href="#">GRID 2 COLUMNS V1</a>
            </li>
            <li>
              <a href="#">GRID 3 COLUMNS V1</a>
            </li>
            <li>
              <a href="#">GRID 4 COLUMNS V1</a>
            </li>
            <li>
              <a href="#">PORTFOLIO DETAILS 1</a>
            </li>
            <li>
              <a href="#">PORTFOLIO DETAILS 2</a>
            </li>
            <li>
              <a href="#">PORTFOLIO DETAILS 3</a>
            </li>
          </ul>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>SERVICES</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">SERVICES LIST</a>
            </li>
            <li>
              <a href="#">SERVICES DETAILS V1</a>
            </li>
            <li>
              <a href="#">SERVICES DETAILS V2</a>
            </li>
          </ul>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>ABOUT</span>
          </a>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>BLOG</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">GRID 2 COLUMNS</a>
            </li>
            <li>
              <a href="#">GRID 2 COLUMNS</a>
            </li>
            <li>
              <a href="#">GRID 2 COLUMNS</a>
            </li>
            <li>
              <a href="#">BLOG LIST</a>
            </li>
            <li>
              <a href="#">BLOG DETAIL</a>
            </li>
          </ul>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>PAGES</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">ELEMENT</a>
            </li>
            <li>
              <a href="#">TYPOGRAPHY</a>
            </li>
            <li>
              <a href="#">404 PAGE</a>
            </li>
            <li>
              <a href="#">COMMING SOON</a>
            </li>
          </ul>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>SHOP</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">STORE CATALOG</a>
            </li>
            <li>
              <a href="#">SHOPPING CART</a>
            </li>
            <li>
              <a href="#">SINGLE PRODUCT</a>
            </li>
          </ul>
        </li>
        <li class="has-sub">
          <a href="#">
            <span>CONTACT US</span>
          </a>
          <ul class="nav-level-2">
            <li>
              <a href="#">CONTACT STYLE1</a>
            </li>
            <li>
              <a href="#">CONTACT STYLE2</a>
            </li>
            <li>
              <a href="#">CONTACT STYLE3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <ul class="nav-level1-1">
        <li class="header-right-tel">
          <a href="#">
            <span>TOLL FREE:800 345 6889</span>
          </a>
        </li>
        <li class="header-right-tel">
          <a href="#">
            <span class="right-icon-bag"></span>
          </a>
        </li>
        <li class="header-right-tel">
          <a href="#">
            <span class="right-icon-search"></span>
          </a>
        </li>
      </ul>

      <!-- <v-icon name="search"/> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageLogo: "./static/img/logo.png",
      righticonbag: "./static/img/icon-bag.png",
      righticonsearch: "./static/img/icon-search.png"
    };
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.header-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  // position:fixed;
  // top:0;
  // left:0;
  background-color: fff;
}
.page-logo {
  height: 29px;
  width: 119px;
  border: none;
}
.header-left {
  height: 52px;
  width: 120px;
  margin-top: 25px;
  margin-left: 40px;
}
.header-center {
  height: 57px;
  width: 1000px;
  margin-left: 254px;
  margin-top: 11px;
  ul li:not(:last-child) a span::after {
    content: "|";
    margin: 32px;
    color: #757474;
  }
}
.header-right {
  display: flex;
  height: 57px;
  width: 373px;
  margin-top: 11px;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
.nav-level-1 {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.has-sub:hover {
  .nav-level-2 > li {
    visibility: visible;
    background: #eacc1d;
    &:hover {
      background: rgb(51, 50, 50);
      a {
        color: #eacc1d;
      }
    }
  }
}
.nav-level-2 > li {
  visibility: hidden;
}
.nav-level-2 {
  list-style: none;
  position: absolute;
  z-index: 1;
}
// .nav-level-2 a:hover {
//   display: block;
//   color: #1d1c19;
//   background-size: 100px 50p;
// }

.header-center .has-sub a {
  display: block;
  line-height: 57px;
  height: 57px;
  text-decoration: none;
  color: rgb(117, 116, 116);
  font-size: 12px;
  letter-spacing: 1.5px;
  font-family: sans-serif;
}
.nav-level1-1 {
  list-style: none;
  margin-left: 25px;
}

.header-right-tel a {
  display: block;
  line-height: 57px;
  height: 57px;
  text-decoration: none;
  color: #757474;
  font-size: 12px;
  letter-spacing: 2px;
  font-family: initial;
  margin-right: 20px;
}
.header-right-tel a :hover {
  color: #eacc1d;
}
.header-right ul li:not(:last-child) a span::after {
  content: "|";
  margin-left: 25px;
  color: #757474;
}
.right-icon-bag {
  background: url("https://s2.ax1x.com/2019/02/22/kfnLq0.png") no-repeat left
    center;
  background-size: 9px 13px;
  display: block;
  height: 57px;
}

.right-icon-bag:hover {
  /* filter: drop-shadow(0 0 0 #eacc1d); */
  /* background-color: #eacc1d; */
  background: url("https://s2.ax1x.com/2019/02/25/k5GPkd.png") no-repeat left
    center;
  background-size: 9px 13px;
  display: block;
  height: 57px;
}
.right-icon-search {
  background: url("https://s2.ax1x.com/2019/02/22/kfnXZV.png") no-repeat left
    center;
  background-size: 13px 13px;
  display: block;
  height: 57px;
  width: 13px;
}
.right-icon-search:hover {
  background: url("https://s2.ax1x.com/2019/02/25/k5G9TH.png") no-repeat left
    center;
  background-size: 13px 13px;
  display: block;
  height: 57px;
  width: 13px;
}
</style>


