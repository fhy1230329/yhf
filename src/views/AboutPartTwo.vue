<template>
    <div class="aboutpart2">
       <div class="aboutpart2-box">
           <div class="aboutpart2-1">
               <img src="https://s2.ax1x.com/2019/03/04/kOMeRH.jpg" >
           </div>
           <div class="aboutpart2-2">
               <h1>WE ARE DESIGN STUDIO</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempus quam. <br> 
               Aliquam eu tellus urna. Pellentesque consectetur et nisl vel pulvinar. Vestibulum <br>
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia <br>
                <b>Small change, big difference.</b>Pellentesque cursus neque nisi, vitae rutrum est<br>
                pellentesque ac. Proin eleifend sodales justo a facilisis. <br>
                <b>Ideas & Creative. </b>Nam nec posuere odio. Phasellus quam mi, aliquam sit amet <br>
                 accumsan non, tempor non massa. Mauris tristique facilisis molestie. Donec et <br>
                  imperdiet arcu. Aliquam erat volutpat. Morbi enim tellus, volutpat vel imperdiet sed, <br>
                   efficitur non diam. Etiam dignissim elit nec orci rutrum facilisis. Ut id elit <br>
                 consectetur, interdum est sit amet, dictum magna.
                </p>
                 <h1>DESIGN AWARDS</h1>
                 <p>Mauris tortor velit, commodo quis dignissim a, vehicula non ligula. Cras malesuada <br>
                  tortor sit amet tellus vehicula sodales. Suspendisse non sollicitudin quam. Class <br>
                   aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br>
                  Nunc aliquam felis quis ipsum feugiat commodo.</p>
           </div>
           </div> 
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.aboutpart2{
    width: 100%;
    height: 655px;
    position: relative;
    .aboutpart2-box{
        width: 1172px;
        height: 562px;
        position: absolute;
        top:92px;
        left: 374px;
        display: flex;
        flex-direction: row;
        .aboutpart2-1{
            width: 561px;
            height: 562px;
            img{
              width: 561px;
            height: 562px;  
            }
        }
        .aboutpart2-2{
           width: 563px;
            height: 562px;
            margin-left: 48px;
            h1{
                display: flex;
               align-items: flex-start;
               line-height:80px;
               font-family: initial;
            }
            p{
                text-align: left;
                font-size: 15px;
                line-height: 26px;
                color: #666666;
            }
        }
    }
}
</style>
