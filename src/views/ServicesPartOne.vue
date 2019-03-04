<template>
    <div class="servicespart1">
        <div class="servicespart1-box">
        <p> PORTFOLIO GRID</p>
        <font><a href="./">HOME </a><span>/</span>  OUR SERVICES</font>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.servicespart1{
    width: 100%;
    height: 335px;
    background-color:rgb(33, 33, 33) ;
    position: relative;
    .servicespart1-box{
        width: 300px;
        height: 90px;
        position: absolute;
        margin-left: 810px;
        margin-top: 122px;
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
