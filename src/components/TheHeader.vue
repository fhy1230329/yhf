<template>
    <div class="header-top">
        <div class="header-left">
           <img :src="pageLogo" class="page-logo"/>
        </div>
        <div class="header-center">
        <ul class="nav-level-1">
            <li class="has-sub"><a href=""><span>HOME</span></a></li>
            <li class="has-sub"><a href=""><span>PROJECTS</span></a></li>
            <li class="has-sub"><a href=""><span>SERVICES</span></a></li>
            <li class="has-sub"><a href=""><span>ABOUT</span></a></li>
            <li class="has-sub"><a href=""><span>BLOG</span></a></li>
            <li class="has-sub"><a href=""><span>PAGES</span></a></li>
            <li class="has-sub"><a href=""><span>SHOP</span></a></li>  
            <li class="has-sub"><a href=""><span>CONTACT US</span></a></li>                    
        </ul>
        </div>
        <div class="header-right">
            <ul class="nav-level1-1">
                <li class="header-right-tel"><a href=""><span>TOLL FREE:800 345 6889</span></a></li>
                <li class="header-right-tel"><a href=""><span class="right-icon-bag"></span></a></li>
                <li class="header-right-tel"><a href=""><span><img :src="righticonsearch" class="right-icon-search"/></span></a></li>
            </ul>
       

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageLogo:'./static/img/logo.png',
            righticonbag:'./static/img/icon-bag.png',
            righticonsearch:'./static/img/icon-search.png',
            
          
        }
    }
}
</script>
<style scoped>
*{margin:0px;  padding:0px;}
.header-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
}
.page-logo{
    height: 29px;
    width: 119px;
    border: none;
}
.header-left{
    height: 52px;
    width: 120px;
    margin-top: 25px;
    margin-left: 40px; 
}
.header-center{
    height: 57px;
    width: 1000px;
    margin-left: 254px;
    margin-top: 11px;
}
.header-right{
    display: flex;
    height: 57px;
    width: 373px;
     margin-top: 11px;
}
.header-right ul{
    display: flex;
    flex-wrap:wrap;
}
.nav-level-1 {
    display: flex;
    flex-direction: row;  
    list-style: none;
}
.header-center  ul li:not(:last-child) a span::after{
    content: "|";
   margin: 32px;
    }
.has-sub a{
    display: block;
    line-height:57px;
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
.header-right-tel a{
    display: block;
    line-height:57px;
    height: 57px;
   text-decoration: none;
   color: #757474;
   font-size: 12px;
  letter-spacing: 2px;
 font-family: initial;
}
.header-right-tel a :hover{
    color: #eacc1d;
}
.header-right  ul li:not(:last-child) a span::after{
    content: "|";
   margin:20px;
    }
    .right-icon-bag{
        background:url("https://s2.ax1x.com/2019/02/22/kfnLq0.png") no-repeat;
        background-size: 9px 13px;
    }
    
    .right-icon-bag:hover{
        /* filter: drop-shadow(0 0 0 #eacc1d); */
     
    }
    .right-icon-search{
         width:13px;
         height: 13px;
         /* https://s2.ax1x.com/2019/02/22/kfnXZV.png */
            }      

</style>


