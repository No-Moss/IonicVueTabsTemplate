<template>
  <swiper class="testing" :slides-per-view="1" :loop="false">
    <swiper-slide class="testSlide1">Slide 1</swiper-slide>
    <swiper-slide class="testSlide2">Slide 2</swiper-slide>
    <swiper-slide class="testSlide3">Slide 3</swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<style scoped>
.testing {
  background: white;
  height: 100px;
  width: 100px;
  top: 100px;
  padding-top: 40px;
  text-align: center;
  margin: auto;
}
.testSlide1 {
  color: red;
}
.testSlide2 {
  color: green;
}
.testSlide3 {
  color: blue;
}
</style>
