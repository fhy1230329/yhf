<template>
  <div class="Services">
    <TheHeader/>
    <ServicesPartOne/>
    <ServicesPartTwo/>
    <ServicesPartThree/>
    <ServicesPartFour/>
     <TheFoot/>
  </div>
</template>
<script>
import TheHeader from '@/views/TheHeader'
import ServicesPartOne from '@/views/ServicesPartOne'
import ServicesPartTwo from '@/views/ServicesPartTwo'
import ServicesPartThree from '@/views/ServicesPartThree'
import ServicesPartFour from '@/views/ServicesPartFour'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'Services',
  components:{
    TheHeader, 
    ServicesPartOne,
    ServicesPartTwo,
    ServicesPartThree,
    ServicesPartFour,
    TheFoot
  }
}
</script>

<style scoped>

</style>