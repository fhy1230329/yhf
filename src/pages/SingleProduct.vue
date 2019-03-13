<template>
  <div class="SingleProduct">
    <TheShopHeader/>
   <SingleProductBody/>
     <TheShopFoot/>
  </div>
</template>

<script>
import TheShopHeader from '@/views/TheShopHeader'
import SingleProductBody from '@/views/SingleProductBody'
import TheShopFoot from '@/views/TheShopFoot'
export default {
  name: 'SingleProduct',
  components:{
    TheShopHeader,
    SingleProductBody,
    TheShopFoot
  }
}
</script>
<style scoped>
.SingleProduct{
    width: 100%;
    height: 2647px;
    background-color: rgb(245, 245, 245);
 display: flex;
  flex-direction: column;
  align-items: center;
}
</style>