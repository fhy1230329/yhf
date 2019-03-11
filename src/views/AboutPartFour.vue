<template>
    <div class="aboutpart4">
        <div class="aboutpart4-box">
            <p>We are creative interior design, architecture and 
            decor your space</p>
            <a href="">WORK WITH US</a>
            </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.aboutpart4{
    width: 100%;
    height: 420px;
    background-color: #eacb1d;
    position: relative;
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    .aboutpart4-box{
      display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 838px;
        height:220px;
         position: relative;
         p{
             font-size: 39px;
             display: block;
             width: 838px;
            height: 100px;
            
         }
     a {
    display: block;
    width: 220px;
    height: 42px;
    background-color: #fff;
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    font-size: 12px;
    line-height: 42px;
    // margin-left: 309px;
    text-decoration: none;
    color:rgb(22, 21, 21);
    transition: 1s;
    margin-top: 63px;
    &:hover {
      color: #fff;
      background-color:rgb(22, 21, 21) ;
      transition: 1s;
    }
  }
}
}
</style>
