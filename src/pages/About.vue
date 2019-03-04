<template>
  <div class="About">
    <TheHeader/>
    <AboutPartOne/>
    <AboutPartTwo/>
    <AboutPartThree/>
    <AboutPartFour/>
     <AboutPartFive/>
     <TheFoot/>
  </div>
</template>
<script>
import TheHeader from '@/views/TheHeader'
import AboutPartOne from '@/views/AboutPartOne'
import AboutPartTwo from '@/views/AboutPartTwo'
import AboutPartThree from '@/views/AboutPartThree'
import AboutPartFour from '@/views/AboutPartFour'
import AboutPartFive from '@/views/AboutPartFive'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'About',
  components:{
    TheHeader, 
    AboutPartOne,
    AboutPartTwo,
    AboutPartThree,
    AboutPartFour,
    AboutPartFive,
    TheFoot
  }
}
</script>

<style scoped>

</style>