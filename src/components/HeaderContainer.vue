<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ props.title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";

const props = defineProps({
  title: { type: String, required: false },
});
</script>
<style lang="scss" scoped>
@import "@/theme/breakpoints.scss";
@include breakpoint(medium) {
  ion-toolbar {
    left: 150px;
  }
}
</style>
