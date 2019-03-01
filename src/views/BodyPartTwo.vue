<template>
  <div class="bodypart2">
    <div class="bodypart2-1">
      <div class="bodypart2-1-1">
        <p>
          <span>GREEN DESIGN</span>
          <br>Inspired by nature and created comfortable
          <br>space for your life
        </p>
        <a href>VIEW SERVICE</a>
      </div>
    </div>
    <div class="bodypart2-2">
      <div class="bodypart2-1-1">
        <p>
          <span>WE LOVE SPACE</span>
          <br>Inspired by nature and created comfortable
          <br>space for your life
        </p>
        <a href="">OUR PROJECT</a>
      </div>
    </div>
    <div class="bodypart2-3">
      <div class="bodypart2-1-1">
        <p>
          <span>EXPERT INTERIOR</span>
          <br>Inspired by nature and created comfortable
          <br>space for your life
        </p>
        <a href>VIEW SHOP</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.bodypart2 {
  width: 100%;
  height: 420px;
  // background-color: plum;
  display: flex;
  flex-direction: row;
}
.bodypart2-1 {
  background: url("https://s2.ax1x.com/2019/02/26/kIUBK1.jpg");
  background-size: 640px 420px;
  width: 33.3%;
  height: 420px;
}
.bodypart2-1-1 {
//  width: 33.3%;
  height: 420px;
  background-color: rgba(12, 11, 11, 0.53);
  p {
    color: darkgray;
    font-size: 16px;
    padding-top: 130px;
    span {
      font-size: 26px;
      display: block;
      color: #fff;
    }
  }
  a {
    display: block;
    width: 160px;
    height: 42px;
    background-color: #eacc1d;
    font-size: 12px;
    line-height: 42px;
    margin-top: 40px;
    margin-left: 240px;
    text-decoration: none;
    color: rgb(22, 21, 21);
    transition: 1s;
    &:hover {
      color: #eacc1d;
      background-color: rgb(22, 21, 21);
      transition: 1s;
    }
  }
}
.bodypart2-2 {
  background: url("https://s2.ax1x.com/2019/02/26/kIUDDx.jpg");
  background-size: 640px 420px;
  width: 33.3%;
  height: 420px;
}
.bodypart2-3 {
  background: url("https://s2.ax1x.com/2019/02/26/kIaao8.jpg");
  background-size: 640px 420px;
 width: 33.3%;
  height: 420px;
}
</style>