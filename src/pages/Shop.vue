<template>
  <div class="Shop">
    <TheShopHeader/>
   <TheShopBody/>
     <TheShopFoot/>
  </div>
</template>

<script>
import TheShopHeader from '@/views/TheShopHeader'
import TheShopBody from '@/views/TheShopBody'
import TheShopFoot from '@/views/TheShopFoot'
export default {
  name: 'Shop',
  components:{
    TheShopHeader,TheShopBody,TheShopFoot
  }
}
</script>

<style scoped>
.Shop{
    width: 100%;
    height: 3795px;
    background-color: rgb(245, 245, 245);
 display: flex;
  flex-direction: column;
  align-items: center;
}
</style>