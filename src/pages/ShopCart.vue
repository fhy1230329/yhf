<template>
  <div class="ShopCart">
    <TheShopHeader/>
   <TheShopCartBody/>
     <TheShopFoot/>
  </div>
</template>

<script>
import TheShopHeader from '@/views/TheShopHeader'
import TheShopCartBody from '@/views/TheShopCartBody'
import TheShopFoot from '@/views/TheShopFoot'
export default {
  name: 'ShopCart',
  components:{
    TheShopHeader,
    TheShopCartBody,
    TheShopFoot
  }
}
</script>

<style scoped>
.ShopCart{
    width: 100%;
    height: 2188px;
    background-color: rgb(245, 245, 245);
 display: flex;
  flex-direction: column;
  align-items: center;
}
</style>