<template>
  <div class="Index">
    <TheHeader/>
    <TheBody/>
     <TheFoot/>
  </div>
</template>

<script>
import TheHeader from '@/views/TheHeader'
import TheBody from '@/views/TheBody'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'Index',
  components:{
    TheHeader,TheBody,TheFoot
  }
}
</script>

<style scoped>
/* .Index{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
</style>
