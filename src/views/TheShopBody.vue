<template>
  <div class="TheShopBody">
    <TheShopBodyPartOne/>
  </div>
</template>

<script>
import TheShopBodyPartOne from '@/views/TheShopBodyPartOne'
// import TheBody from '@/views/TheBody'
// import TheFoot from '@/views/TheFoot'
export default {
  name: 'Index',
  components:{
    TheShopBodyPartOne,
    // TheBody,TheFoot
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
