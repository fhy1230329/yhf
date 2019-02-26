<template>
    <div>
        <TheBanner/>
        <BodyPartOne/>
        <BodyPartTwo/>
         <BodyPartThree/>
         <BodyPartFive/>
    </div>
</template>
<script>
import TheBanner from '@/components/TheBanner'
import BodyPartOne from '@/views/BodyPartOne'
import BodyPartTwo from  '@/views/BodyPartTwo'
import BodyPartThree from  '@/views/BodyPartThree'
import BodyPartFive from  '@/views/BodyPartFive'
export default {
  components:{
    TheBanner,
   BodyPartOne,
   BodyPartTwo,
   BodyPartThree,
   BodyPartFive
  }
}
</script>