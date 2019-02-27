<template>
    <div>
        <TheBanner/>
        <BodyPartOne/>
        <BodyPartTwo/>
         <BodyPartThree/>
         <BodyPartFour/>
         <BodyPartFive/>
         <BodyPartEight/>
    </div>
</template>
<script>
import TheBanner from '@/components/TheBanner'
import BodyPartOne from '@/views/BodyPartOne'
import BodyPartTwo from  '@/views/BodyPartTwo'
import BodyPartThree from  '@/views/BodyPartThree'
import BodyPartFour from  '@/views/BodyPartFour'
import BodyPartFive from  '@/views/BodyPartFive'
import BodyPartEight from  '@/views/BodyPartEight'

export default {
  components:{
    TheBanner,
   BodyPartOne,
   BodyPartTwo,
   BodyPartThree,
   BodyPartFour,
   BodyPartFive,
   BodyPartEight
  }
}
</script>