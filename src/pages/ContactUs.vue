<template>
  <div class="BlogDetails">
    <TheHeader/>
    <ContactUsPartOne/>
    <ContactUsPartTwo/>
     <TheFoot/>
    
  </div>
</template>
<script>
import TheHeader from '@/views/TheHeader'
import ContactUsPartOne from '@/views/ContactUsPartOne'
import ContactUsPartTwo from '@/views/ContactUsPartTwo'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'ContactUs',
  components:{
    TheHeader, 
    ContactUsPartOne,
    ContactUsPartTwo,
    TheFoot
  }
}
</script>

<style scoped>

</style>