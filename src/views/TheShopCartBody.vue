<template>
  <div class="TheShopCartBody">
    <TheShopBodyPartOne/>
   <TheShopCartBodyPartOne/>
   <TheShopCartBodyPartTwo/>
   <TheShopBodyPartThree/>
     <TheShopBodyFoot/>
  </div>
</template>

<script>
import TheShopBodyPartOne from '@/views/TheShopBodyPartOne'
import TheShopCartBodyPartOne from '@/views/TheShopCartBodyPartOne'
import TheShopCartBodyPartTwo from '@/views/TheShopCartBodyPartTwo'
import TheShopBodyPartThree from '@/views/TheShopBodyPartThree'
import TheShopBodyFoot from '@/views/TheShopBodyFoot'
export default {
  name: 'ShopCart',
  components:{
    TheShopBodyPartOne,
TheShopCartBodyPartOne,
TheShopCartBodyPartTwo,
TheShopBodyPartThree,
   TheShopBodyFoot,
  }
}
</script>

<style scoped>
.TheShopCartBody{
    width: 1174px;
    height: 2073px;
    background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgb(197, 195, 195) 0px  5px 15px;
}
</style>
