<template>
  <div class="Projects">
    <TheHeader/>
    <ProjectsPartOne/>
    <ProjectsPartTwo/>
     <TheFoot/>
    
  </div>
</template>
<script>
import TheHeader from '@/views/TheHeader'
import ProjectsPartOne from '@/views/ProjectsPartOne'
import ProjectsPartTwo from '@/views/ProjectsPartTwo'
import TheFoot from '@/views/TheFoot'
export default {
  name: 'Projects',
  components:{
    TheHeader, 
    ProjectsPartOne,
    ProjectsPartTwo,
    TheFoot
  }
}
</script>

<style scoped>
.Projects{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>