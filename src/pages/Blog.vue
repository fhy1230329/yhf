<template>
  <div class="Blog">
    <TheHeader/>
    <BlogPartOne/>
    <BlogPartTwo/>
     <TheFoot/>
    
  </div>
</template>
<script>
import TheHeader from '@/views/TheHeader'
import BlogPartOne from '@/views/BlogPartOne'
import BlogPartTwo from '@/views/BlogPartTwo'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'Blog',
  components:{
    TheHeader, 
    BlogPartOne,
    BlogPartTwo,
    TheFoot
  }
}
</script>

<style scoped>
.Blog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>