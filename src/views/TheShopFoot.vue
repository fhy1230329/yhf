<template>
    <div class="theshopfoot">
       <p>Copyright © 2016 Designed by <span> AuThemes</span>. All rights reserved.</p>
        <div class="gotop">
      <a id="goTopBtn" href="#">
        <p>^</p>
      </a>
    </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.theshopfoot{
  width:1174px;
    height: 65px;
   p {
      font-size: 12px;
      line-height: 65px;
      display: block;
      color: rgb(148, 148, 148);
      span {
        color: #eacc1d;
      }
    }
    .gotop {
    position: fixed; 
    top: 105%; 
    left: 90%;
    margin-top: -125px; 
     transition: 1s;
     a {
    display: block;
    width: 40px;
    height: 40px;
    background-color:rgba(10, 10, 10, 0.527);
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
     transition: 1s;
     p{
    color: #fff;
     display: block;
    width: 40px;
    height: 40px;
      line-height: 40px;
       transition: 1s;
      &:hover{
           transition: 1s;
          color:rgb(24, 19, 19); 
      }
     }
     &:hover {
    background-color: #eacc1d;
    color: rgb(24, 19, 19);
    transition: 1s;
  }
  }
  
  }

}
</style>