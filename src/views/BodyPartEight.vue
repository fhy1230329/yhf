<template>
  <div class="bodypart8">
    <div class="bodypart8-1">
      <h2>DON'T FORGET TO SIGN UP!</h2>
      <img src="https://s2.ax1x.com/2019/02/25/k5IKQ1.png">
    </div>
    <p>Find out early about all upcoming promotions and new products releases with
      <br>our newsletter.
    </p>
    <div class="bodypart8-2">
      <input type="text" class="email-text" placeholder="email@example.com">
      <input type="button" class="email-submit" value="SUBSCRIBE">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.bodypart8 {
  width: 100%;
  height: 490px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: rgb(102, 100, 100);
    display: block;
    position: absolute;
    top: 248px;
  }
}
.bodypart8-1 {
  width: 100%;
  height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  h2 {
    display: block;
    line-height: 24px;
    margin-top: 70px;
  }
  img {
    width: 372px;
    height: 15px;
    margin-top: 40px;
  }
}
.bodypart8-2 {
  height: 82px;
  width: 758px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 100px;
  .email-text {
    width: 597px;
    height: 42px;
    padding-left: 17px;
    background-color: rgb(230, 230, 230);
    border: none;
    outline: none;
    position: absolute;
    left: 0px;
    &:focus {
      border: solid 1px #eacc1d;
      // border-color: #eacc1d;
      background-color: rgb(242, 242, 242);
    }
  }
  .email-submit {
    left: 597px;
    position: absolute;
    width: 161px;
    height: 42px;
    background-color: #eacc1d;
    border: none;
    font-size: 10px;
    color: #333333;
    outline: none;
    transition: 1s;
    position: absolute;
    // left: 1166px;
    &:hover {
      background-color: #333333;
      color: #eacc1d;
      transition: 1s;
    }
  }
}
</style>

