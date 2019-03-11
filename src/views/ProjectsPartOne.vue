<template>
    <div class=" projectspart1">
        <div class="projectspart1-box">
        <p> PORTFOLIO GRID</p>
        <font><a href="./">HOME </a><span>/</span>  PORTFOLIO GRID</font>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.projectspart1{
    width: 100%;
    height: 335px;
    background-color:rgb(33, 33, 33) ;
    position: relative;
     display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    .projectspart1-box{
        width: 300px;
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

