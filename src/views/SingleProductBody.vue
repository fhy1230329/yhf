<template>
  <div class="SingleProductBody">
    <TheShopBodyPartOne/>
   <SingleProductBodyPartOne/>
 <TheShopBodyPartThree/>
 <SingleProductBodyPartTwo/>
     <TheShopBodyFoot/>
  </div>
</template>

<script>
import TheShopBodyPartOne from '@/views/TheShopBodyPartOne'
import SingleProductBodyPartOne from '@/views/SingleProductBodyPartOne'
import TheShopBodyPartThree from '@/views/TheShopBodyPartThree'
import SingleProductBodyPartTwo from '@/views/SingleProductBodyPartTwo'
import TheShopBodyFoot from '@/views/TheShopBodyFoot'
export default {
  name: 'SingleProductBody',
  components:{
    TheShopBodyPartOne,
SingleProductBodyPartOne,
TheShopBodyPartThree,
SingleProductBodyPartTwo,
   TheShopBodyFoot,
  }
}
</script>

<style scoped>
.SingleProductBody{
    width: 1174px;
    height: 2542px;
    background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgb(197, 195, 195) 0px  5px 15px;
}
</style>