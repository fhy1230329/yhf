<template>
  <div class="TheShopBody">
    <TheShopBodyPartOne/>
    <TheShopBodyPartTwo/>
    <TheShopBodyPartThree/>
     <TheShopBodyFoot/>
  </div>
</template>

<script>
import TheShopBodyPartOne from '@/views/TheShopBodyPartOne'
import TheShopBodyPartTwo from '@/views/TheShopBodyPartTwo'
import TheShopBodyPartThree from '@/views/TheShopBodyPartThree'
import TheShopBodyFoot from '@/views/TheShopBodyFoot'
export default {
  name: 'Index',
  components:{
    TheShopBodyPartOne,
   TheShopBodyPartTwo,
   TheShopBodyPartThree,
   TheShopBodyFoot,
  }
}
</script>

<style scoped>
.TheShopBody{
    width: 1174px;
    height: 3680px;
    background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgb(197, 195, 195) 0px  5px 15px;
}
</style>
