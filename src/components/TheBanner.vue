<template>
  <div>
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="200"
      v-model="slide"
     @sliding-start="onSlideStart" 
      @sliding-end="onSlideEnd"
    >
     <!-- Text slides with image -->
      <b-carousel-slide img-src="https://s2.ax1x.com/2019/02/25/k5DAOA.jpg" style="width:100%; height:850px">
       <!-- <p style="font-size:72px">6235657813685</p> -->
       </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://s2.ax1x.com/2019/02/25/k5DVeI.jpg" style="width:100%; height:850px"/>
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://s2.ax1x.com/2019/02/25/k5Dkyd.jpg" style="width:100%; height:850px"/>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
