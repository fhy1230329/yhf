<template>
    <div class="aboutpart1">
        <div class="aboutpart1-box">
        <p> ECOMMERCIAL DESIGN</p>
        <font><a href="./">HOME</a>&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;<a href="/Services">OUR SERVICES </a>&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;ECOMMERCIAL DESIGN</font>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.aboutpart1{
    width: 100%;
    height: 335px;
    background-color:rgb(33, 33, 33) ;
    position: relative;
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    .aboutpart1-box{
        width: 500px;
        height: 90px;
        position: absolute;
       display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            font-size: 35px;
            height: 53px;
            line-height: 35px;
            display: block;
            color: #fff;
          
        }
        font{
            display: block;
            color:#fff ;
            font-size: 13px;
            a{
                color:#eacc1d ;
                text-decoration: none;
            }
            span{
                font-size: 18px;
            }
        }
        
    }
}
</style>
