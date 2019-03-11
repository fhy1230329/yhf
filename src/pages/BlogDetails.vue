<template>
  <div class="BlogDetails">
    <TheHeader/>
    <BlogDetailsPartOne/>
    <BlogDetailsPartTwo/>
     <TheFoot/>
    
  </div>
</template>
<script>
import TheHeader from '@/views/TheHeader'
import BlogDetailsPartOne from '@/views/BlogDetailsPartOne'
import BlogDetailsPartTwo from '@/views/BlogDetailsPartTwo'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'BlogDetails',
  components:{
    TheHeader, 
    BlogDetailsPartOne,
    BlogDetailsPartTwo,
    TheFoot
  }
}
</script>

<style scoped>
.BlogDetails{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>