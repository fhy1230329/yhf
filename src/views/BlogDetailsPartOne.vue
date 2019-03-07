<template>
    <div class="blogdetailspart1">
        <div class="blogdetailspart1-box">
        <p>BLOG</p>
        <font><a href="./">HOME</a>&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;<a href="/BLOG">BLOG</a>&nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;BLOG DETAILS</font>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.blogdetailspart1{
    width: 100%;
    height: 335px;
    background-color:rgb(33, 33, 33) ;
    position: relative;
    .blogdetailspart1-box{
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
